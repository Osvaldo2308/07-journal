 
 import axios from "axios";


 const journalApi = axios.create({
    baseURL: 'https://vue-demos-f5c26-default-rtdb.firebaseio.com'
 })

 export default journalApi