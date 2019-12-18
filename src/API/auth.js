const sqlite = require('sqlite-sync');
var jwt = require('jsonwebtoken');

const Login = (request, response) => {
    const login = request.body.login
    const password = request.body.password

    var token = jwt.sign({ jsession_id: +(new Date()) }, 'FL')
  sqlite.run("SELECT ID,role_id,fullname,avatar FROM users where username = $1 and password = $2", [login,password], (results) => {
        //console.log(login + ' ' + password + ' ' + lpArr.login)
      
       response.json({result:results,session_id:results.length > 0 ? token : '',status:results.length > 0 ? true: false,error_message:results.length > 0 ? '': 'Пользователь не найден или не верный пароль!'})   
       //console.log(results + ' ' + results[0].ID);
       sqlite.insert("auth", {
        user_id:	results[0].ID,
        jsession_id:	token,
        DateTime:	+(new Date().getTime()),
        active: 1,
        DeathTime: +(new Date().getTime())
    }, function (res) {
        if (res.error)
            throw res.error;
        //console.log(results.ID, + ' ' + results.fullname);
    })
      })
      
  }

  const RQLogin = (request, response) => {
  const token = request.body.token
  sqlite.run("SELECT user_id,active,jsession_id,username,role_id,fullname,avatar FROM auth a LEFT JOIN users u ON a.user_id=u.ID where jsession_id = $1 and active = 1", [token], (results) => {
       // console.log(token)
      
       response.json({result:results,status:results.length > 0 ? true: false,error_message:results.length > 0 ? '': 'Session not found!'})
    })
  }

  const Logout = (request, response) => {
    const token = request.body.token
  sqlite.run("UPDATE auth SET active = 0 where jsession_id = $1", [token], (results) => {
     //   console.log(token)     
       response.json({message:'true'})
    })
  }

  const UsersAll = (request, response) => {
  sqlite.run("SELECT ID,username,fullname,email,avatar,role_id,lastlogin FROM users", (results) => {
     //   console.log(token)     
     response.status(200).json({result:results,status:results.length > 0 ? true: false})
    })
  }

  const AddUser = (request, response) => {
    const username = request.body.username
    const password = request.body.password
    const fullname = request.body.fullname
    const email = request.body.email
    const role_id = request.body.role_id
      sqlite.run("SELECT username from users where username = $1", [username], (results) => {
        if (results.length < 1) {
          
          sqlite.insert("users", {
            username,
            password,
            fullname,
            email,
            role_id
      }, function (res) {
          if (res.error)
              throw res.error;
      }) } else 
      {
        response.json({status: false, message:'Not Uniq'})
      }
       response.json({status: true, message:''})
    })
  }

  const DelUser = (request, response) => {
    const ID = request.body.ID
  sqlite.run("DELETE FROM users where  ID = $1", [ID], (results) => {
     //   console.log(token)     
       response.json({message:'true'})
    })
  }
  
  const EditRole = (request, response) => {
    const ID = request.body.ID //1
    const role_id = request.body.role_id //2
    console.log(role_id)
  sqlite.run("UPDATE users SET role_id = $2 where ID = $1", [role_id,ID], (results) => {
     //   console.log(token)     
       response.json({message:'true'})
    })
  }

module.exports = {
  Login,
  Logout,
  RQLogin,
  UsersAll,
  AddUser,
  DelUser,
  EditRole,
}