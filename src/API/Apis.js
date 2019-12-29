
import * as axios from 'axios';


let token =localStorage.getItem('jssid');
console.log(process.env.REACT_APP_API_URL);
const instance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
  headers: {'Authorization': `Bearer ${token}`},
  withCredentials: true,
  
})
export const API = {
  getInfoByMac(MAC){
    return instance.get(`status/${MAC}`)
    
    .then(response=>{return response.data})
   
  },
 
getPing(MAC){
  return instance.get(`status/${MAC}/ping`)
  .then(response=>{return response.data})
 
},
getDvbcInfo(MAC){
  return instance.get(`status/${MAC}/dvbc`)
  .then(response=>{return response.data})
 
},

getAuth(){
  return instance.get(`refresh/auth`)
  .then(response=>{return response.data})
 
},
getToken(){
  return instance.get(`refresh/auth`,)
  .then(response=>{return response.data})
 
},
postLogin(login, password){
  return instance.post(`login`,{login, password})
  .then(response=>{return response.data})
 
},
patchLogout(){
  return instance.patch(`logout`,)
  .then(response=>{return response.data})
 
},
getUsers(){
  return instance.get(`users`)
  .then(response=>{return response.data})
 
},
postNewUser({login, password, fullname,email,role}){
  return instance.post(`users`,{login, password, fullname,email,role})
  .then(response=>{return response.data})
  
},
getOneUser(ID){
  return instance.get(`users/${ID}`)
  .then(response=>{return response.data})
  
},

deleteUser(ID){
  return instance.delete(`users/${ID}`,)
  .then(response=>{return response.data})
  
},
}


 



