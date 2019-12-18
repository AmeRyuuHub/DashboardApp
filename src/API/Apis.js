
import * as axios from 'axios';




const instance = axios.create({
  baseURL:'http://77.120.3.147:4000/',
  
  
})
export const API = {
  getInfoByMac(MAC){
    return instance.get(`status/${MAC}`)
    
    .then(response=>{return response.data})
   
  },
 
getPing(MAC){
  return instance.get(`ping/${MAC}`)
  .then(response=>{return response.data})
 
},
getDvbcInfo(MAC){
  return instance.get(`dvbc/${MAC}`)
  .then(response=>{return response.data})
 
},

getAuth(token){
  return instance.post(`auth`,{token})
  .then(response=>{return response.data})
 
},
getLogin(login, password){
  return instance.post(`login`,{login, password})
  .then(response=>{return response.data})
 
},
getLogout(token){
  return instance.post(`logout`,{token})
  .then(response=>{return response.data})
 
},
getUsers(){
  return instance.get(`users`)
  .then(response=>{return response.data})
 
},
getUsersAdd({username, password, fullname,email,role}){
  return instance.post(`users/add`,{username, password, fullname,email,role_id:role})
  .then(response=>{return response.data})
  
},
getUsersEdit(ID,role_id){
  return instance.post(`users/edit`,{ID,role_id})
  .then(response=>{return response.data})
  
},
getUsersDel(ID){
  return instance.post(`users/del`,{ID})
  .then(response=>{return response.data})
  
},
}


 



