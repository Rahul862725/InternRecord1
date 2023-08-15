import { createSlice } from "@reduxjs/toolkit";

const EnableRedux = createSlice({
    name:'enable',
    initialState:0,
    reducers:{
        setEnable:(state,action)=>{
            return action.payload;
        }
    }
})

export default EnableRedux.reducer
export const { setEnable} = EnableRedux.actions