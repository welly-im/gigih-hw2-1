import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../reducer/authActions";


export default configureStore({
    reducer: {
        token : tokenReducer
    }
});
