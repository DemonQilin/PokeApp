import { configureStore } from "@reduxjs/toolkit";
import userName from './reducers/reducers';

export default configureStore({
    reducer: {
        userName
    }
})