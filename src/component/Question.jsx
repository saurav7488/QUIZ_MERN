import { useEffect, useState } from "react";
import { useFetchQuestion } from "../hooks/FetchQuestion.js";
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from "../hooks/SetResult.js";
import '../styles/Question.css'

export const Question = ({onChecked}) => {

     const [checked, setChecked] = useState(false);
     const [{ loading, apiData, serverError },] = useFetchQuestion();

     const {trace} = useSelector(state=>state.questions)
     const result = useSelector(state=>state.result.result)


     const questions = useSelector(state=>state.questions.queue[state.questions.trace])
     const dispatch = useDispatch()

     // useSelector(state=>console.log(state))

     useEffect(() => {
          dispatch(updateResult({trace,checked}))
     },[checked,dispatch,trace]);

     function handleChange(e) {
          
          // console.log(e);
          onChecked(e)
          setChecked(e)
          // dispatch(updateResult({trace,checked}))
     }

     if (loading) return <h3 className="text-light">isLoading</h3>;
     if (serverError) return <h3 className="text-light">{serverError || "Unknown error"}</h3>;
     return (
          <div className="question">
               <h2 className="text-light">{questions?.question}</h2>

               <ul key={questions?.id}>
                    {questions?.options.map((q, i) => (
                         <li key={i}>
                              <input type="radio"
                                   value={false}
                                   name="options"
                                   id={`${i}-option`}
                                   onChange={()=>handleChange(i)} />
                              <label htmlFor={`${i}-option`} className="text-primary">{q}</label>
                              <div className={`check ${result[trace]==i?'checked':''}`}></div>
                         </li>
                    ))}
               </ul>
          </div>
     );
};
