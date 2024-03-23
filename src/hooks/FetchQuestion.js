import { useEffect, useState } from "react";
// import data,{answers} from '../Database/data';
import { useDispatch } from "react-redux";

// redux action 

import * as Action from '../redux/question-reducer'
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
    const dispatch  = useDispatch()
    const [getData, setGetData] = useState({ loading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, loading: true }));

        (async () => {
            try {
                // let question = await data;
                const questions = await getServerData('http://localhost:8000/api/questions',(data)=>data)
                const answers = questions[0].questions[0].answer
                const question = questions[0].questions[0].data
                console.log({question,answers})
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, loading: false, apiData: {question,answers} }));
                    dispatch(Action.startExamAction({question,answers}))
               }
               else{
                      throw new Error("No question available")
               }
            } catch (error) {
                setGetData(prev => ({ ...prev, loading: false, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData]
};




export const MoveNextQUestion=()=>async(dispatch)=>{
      try{
           dispatch(Action.moveNextAction)
      }
      catch(error){
           console.log(error)
      }
}

export const MovePrevQUestion=()=>async(dispatch)=>{
    try{
         dispatch(Action.movePrevAction)
    }
    catch(error){
         console.log(error)
    }
}