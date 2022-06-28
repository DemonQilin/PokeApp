import { configureStore } from "@reduxjs/toolkit";
import userName from './reducers/userName'

export default configureStore({
    reducer: {
        userName
    }
})