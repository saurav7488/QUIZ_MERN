  import { useDispatch, useSelector } from 'react-redux'
  import '../styles/Quiz.css'
  import { Question } from './Question'
  import { useEffect, useState } from 'react'
  import { moveNextAction, movePrevAction } from '../redux/question-reducer'
import { PushAnswer } from '../hooks/SetResult'

import {Navigate} from 'react-router-dom'

  const Quiz = () => {
    
    const [check,setCheck] = useState(undefined)
    
    const result = useSelector(state=>state.result.result)
    const {queue,trace} = useSelector(state=>state.questions)
    const dispatch = useDispatch()
    useEffect(()=>{
        // console.log(trace)
    })
      function onNext() {
          // console.log(result)
          if(trace<queue.length) {
            dispatch(moveNextAction())   
            if(result.length<=trace) {
              dispatch(PushAnswer(check))
            }
          }
         
          setCheck(undefined)
          
      }
      function onPrev() {
          if(trace>0) {
            dispatch(movePrevAction())
          }
    }

    function onChecked(check) {
         setCheck(check)
    }

    // finished exam after the last question 

    if(result.length && result.length>=queue.length) {
        return <Navigate to={'/result'} replace="true"></Navigate>
    }



    return (
      <div className="container" >
            <h1 className="title text-light" >Quiz Application</h1>   
            <Question onChecked={onChecked} />
            <div className="grid" >
                  {trace>0 ? <button className="btn prev" onClick={onPrev} >Prev</button>:<></>}
                  <button className="btn next" onClick={onNext} >Next</button>
            </div>
      </div>
    )
  }

  export default Quiz
