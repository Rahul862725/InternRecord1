import { configureStore } from "@reduxjs/toolkit";
import Enable from "./Redux/Enable";

export default store = configureStore({
    reducer:{
        enable:Enable
    }
})