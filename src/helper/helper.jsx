import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import axios from 'axios'

export function attempts_Number(result){
     return result.filter(r=>r!==undefined).length
}

export function earnPoints(result,answers){
    return result.map((element,i)=>answers[i]===element).filter(i=>i).map(i=>10).reduce((prev,curr)=>prev+curr,0)
}

export function flagResult(totalPoints,earnPoint){
     return (totalPoints*50/100) <earnPoint?"true":"false"
} 

export function CheckUserExist({children}){
     const auth = useSelector(state=>state.result.userId)
     return auth ? children:<Navigate to={'/'} replace="true"></Navigate>
     
}



//  get server data 


export async function getServerData(url,callback) {
      const data = await (await axios.get(url))?.data
      return callback ? callback(data) : data
}

// post the server

export async function postServerData(url,result,callback) {
     console.log(result)
     const data = await axios.post(url,result)
     console.log(data)
     return callback ? callback(data) : data
     // try {
     //      const data = await axios.post(url, result);
     //      const responseData = data.data;
     //      if (callback) {
     //        callback(responseData);
     //      }
     //      return responseData;
     //    } catch (error) {
     //      console.error("Error while posting data to server:", error);
     //      throw error; // Re-throw the error to propagate it
     //    }
}



