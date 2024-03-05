import {createSlice} from '@reduxjs/toolkit'
import { details } from '../Data.jsx'

const mainSlice = createSlice({
    name :'dataDetails',
    initialState :details,
    reducers:{
       addData :(state,action)=>{
        // console.log(action);
        state.push(action.payload)
       },
       updateData:(state,action)=>{
        const {id,title,para} = action.payload
        const uData = state.find(data=>data.id == id)
        if(uData){
            uData.title = title;
            uData.para = para
        }

       },
       deleteData : (state,action)=>{
        const {id} = action.payload;
        const uData = state.find(data=>data.id == id)
        if(uData){
            return state.filter(data=> data.id != id)
        }
       }
    }
})
export const {addData,updateData,deleteData} = mainSlice.actions
export default mainSlice.reducer