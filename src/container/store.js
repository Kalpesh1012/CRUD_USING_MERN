import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import usersSlice from "./usersSlice";

const store=configureStore({
    reducer:{
        user:userSlice,
        users:usersSlice
    }
})

export default store;