import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
      name:"results",
      initialState:{
         userId:null,
         result:[],

      },
      reducers:{
          setuserId:(state,action)=>{
              state.userId = action.payload
          },
          pushResult:(state,action)=>{
               state.result.push(action.payload)
          },
          updateResultAction:(state,action)=>{
               const {trace,checked} = action.payload
               state.result.fill(checked,trace,trace+1)
          },
          resetResultAction:()=>{
              return {
                userId:null,
                result:[],
              }
          }
      }
})

export const {setuserId, pushResult,resetResultAction,updateResultAction} = resultReducer.actions
export default resultReducer.reducer