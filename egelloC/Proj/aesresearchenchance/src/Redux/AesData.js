import { createSlice } from "@reduxjs/toolkit";

const AESRedux =createSlice({
    name:"AESData",
    initialState:"",
    reducers:{
        setAESData:(state,action)=>{
            return action.payload
        }
    }
})

export default AESRedux.reducer
export const { setAESData } = AESRedux.actions