import '../styles/Result.css'
import {Link} from "react-router-dom"
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/question-reducer'
import { resetResultAction } from '../redux/result-reducer'
import { useEffect } from 'react'

import { attempts_Number, earnPoints, flagResult } from '../helper/helper'
import { usePublishResult } from '../hooks/SetResult'
const Result = () => {
     const dispatch = useDispatch()
     const {questions:{queue,answers},result:{result,userId}} = useSelector(state=>state)

     const totalPoints = queue.length*10
     const attempts = attempts_Number(result)
     const earnPoint = earnPoints(result,answers)
     const flag = flagResult(totalPoints,earnPoint)

     usePublishResult({result,username:userId,attempts,points:earnPoint,achieved:flag?"Passed":"Fail"})
     // console.log({result,username:userId,attempts,points:earnPoint,achiver:flag?"Passed":"Fail"})


  function onRestart() {
       dispatch(resetAllAction())
       dispatch(resetResultAction())
  }
  return (
    <div className="container" > 
       
       <h2 className="text-light" >Quiz Application</h2>
         
         <div className="result flex-center" >
                <div className="flex" >
                     <span>username</span>
                     <span className="bold" >{userId}</span>
                </div>
                <div className="flex" >
                     <span>Total Quiz Points:</span>
                     <span className="bold" >{totalPoints}</span>
                </div>

                <div className="flex" >
                     <span>Total Question:</span>
                     <span className="bold" >{queue.length || 0}</span>
                </div>

                <div className="flex" >
                     <span>Total Attempt:</span>
                     <span className="bold" >{attempts}</span>
                </div>

                <div className="flex" >
                     <span>Total Earn Points:</span>
                     <span className="bold" >{earnPoint}</span>
                </div>

                <div className="flex" >
                     <span>Quiz Result</span>
                     <span className="bold" >{!flag?"Passed":"Fail"}</span>
                </div>
         </div>

         <div className='start' >
              <Link className='btn' to={'/'} onClick={onRestart} >Restart</Link>
         </div>

         <div className="container">
              <ResultTable/>
         </div>
    </div>
  )
}

export default Result
