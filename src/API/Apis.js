
import * as axios from 'axios';

const options = () => {
  return {
    headers: { Authorization: `Bearer ${localStorage.getItem("jssid")}`}
  };
};

let instance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
  //  headers:{ "Content-Type":"application/json", "Accept":"*/*"},
  withCredentials: true,
  
})
export const API = {
  getInfoByMac(MAC){
    return instance.get(`dashboard/${MAC}`, options())
    .then(response=>{return response.data})
  },
 
getPing(MAC){
  return instance.get(`dashboard/${MAC}/ping`, options())
  .then(response=>{return response.data})
},

getDvbcInfo(MAC){
  return instance.get(`dashboard/${MAC}/dvbc`, options())
  .then(response=>{return response.data})
 
},

getAuth(){
  return instance.get(`refresh/auth`)
  .then(response=>{return response.data})
 
},
getToken(){
  return instance.get(`refresh/token`,)
  .then(response=>{return response.data})
 
},
postLogin(login, password){
  return instance.post(`login`,{login, password})
  .then(response=>{return response.data})
 
},
patchLogout(){
  return instance.patch(`logout`,null, options())
  .then(response=>{return response.data})
 
},
getUsers(){
  return instance.get(`users`, options())
  .then(response=>{return response.data})
 
},
postNewUser({login, password, fullName, email, role}){
  return instance.post(`users`,{login, password, fullName,email,role}, options())
  .then(response=>{return response.data})
  
},
getOneUser(ID){
  return instance.get(`users/${ID}`, options())
  .then(response=>{return response.data})
  
},

deleteUser(ID){
  return instance.delete(`users/${ID}`, options())
  .then(response=>{return response.data})
  
},

getProfile(){
  return instance.get(`profile`, options())
  .then(response=>{return response.data})
 
},
}


 





