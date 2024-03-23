import { useEffect } from 'react'
import { postServerData } from '../helper/helper'
import * as Action from '../redux/result-reducer'
export const PushAnswer=(result)=> async(dispatch)=> {
     try{
         await dispatch(Action.pushResult(result))
     }
     catch(error) {
         console.log(error)
     }
}

export const updateResult = (index)=>async(dispatch)=>{
       try{
           dispatch(Action.updateResultAction(index))
       }
       catch(error) {
           console.log(error)
       }
}


// insert user data 


export const usePublishResult = (resultData)=>{
      const {result,username} = resultData 
    //   console.log(resultData)
      useEffect(() => {
        const publishResult = async () => {
          try {
            if (result == [] || !username) {
              throw new Error("Result data or username not provided");
            }
            await postServerData('http://localhost:8000/api/result', resultData,(data)=>data);
          } catch (error) {
            console.error(error);
          }
        };
    
        publishResult();
      }, [resultData]);
}




