import { configureStore } from "@reduxjs/toolkit";
import Enable from "./Redux/Enable";
import AES from "./Redux/AesData";

export const store = configureStore({
    reducer:{
        enable:Enable,
        aes: AES
    }
})