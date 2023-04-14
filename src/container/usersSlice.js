import { createSlice } from "@reduxjs/toolkit";

const usersSlice=createSlice({
    name:"users",
    initialState:[{
        id:"",
        name:"",
        lname:"",
        email:""

    }],
    reducers:{
        getUser:(state,action)=>{
        state=action.payload;
        },
        addUser:(state,action)=>{
            state.push(action.payload);
        },
        updateUser:(state,action)=>{
            state.map((item)=>{
                if(item.id===action.payload.id){
                    item.name=action.payload.name;
                    item.lname=action.payload.lname;
                    item.email=action.payload.email
                }
            })
        },
        deleteUser:(state,action)=>{
            state.splice(action.payload,1);
        }
    }
})

export const {getUser,addUser,updateUser,deleteUser}=usersSlice.actions;
export default usersSlice.reducer;