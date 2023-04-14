import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signupSchmas } from "../../schemas";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialValues = {
  name: "",
  lname: "",
  email: "",
};
const EditForm = () => {
  const {defaultValue ,values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchmas,

      onSubmit: async (defaultValue, action) => {
        console.log("RUNNNNN");
        console.log(defaultValue);

        await axios.put("http://localhost:5000/edit/"+id,{
            name: defaultValue.name,
            lname: defaultValue.lname,
            email: defaultValue.email,
          },)


        action.resetForm();
      },
    });

    const {id}=useParams()

    const [users,setUsers]=useState([])
    useEffect(()=>{
        loadUserDetails(id);
    },[])

    const loadUserDetails=async(id)=>{
        try{
             const user= await axios.get("http://localhost:5000/"+id);
             setUsers(user.data.user[0]);
        }
        catch(e){
            console.log(e);
        }
    }
   
  return (
    <div>
        {users.length===0 ? <h1>Data is Loading </h1>:
      <form onSubmit={handleSubmit}>
        <div
          style={{ display: "grid", marginLeft: "500px", marginTop: "30px" }}
        >
          <div style={{ display: "flex", height: "auto" }}>
            <h3 style={{ marginTop: "34px" }}>Edit Name:</h3>{" "}
            <div style={{ display: "grid" }}>
              <input
                style={{
                  height: "25px",
                  width: "350px",
                  marginTop: "30px",
                  marginLeft: "90px",
                }}
                placeholder="NAME"
                name="name"
                defaultValue={users.name}
               // value={users.name}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.name && touched.name ? (
                <p style={{ marginLeft: "90px", color: "red" }}>
                  {errors.name}
                </p>
              ) : null}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <h3 style={{ marginTop: "34px" }}>Edit-Last-Name:</h3>
            <div style={{ display: "grid" }}>
              <input
                style={{
                  height: "25px",
                  width: "350px",
                  marginTop: "30px",
                  marginLeft: "50px",
                }}
                placeholder="LAST-NAME"
                name="lname"
                defaultValue={users.LastName}
               //value={users.LastName}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.lname && touched.lname ? (
                <p style={{ marginLeft: "50px", color: "red" }}>
                  {errors.lname}
                </p>
              ) : null}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <h3 style={{ marginTop: "34px" }}>Edit EMAIL:</h3>
            <div style={{ display: "grid" }}>
              <input
                style={{
                  height: "25px",
                  width: "350px",
                  marginTop: "30px",
                  marginLeft: "75px",
                }}
                placeholder="Email10@gmail.com"
                name="email"
                defaultValue={users.Email}
              //value={users.Email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.email && touched.email ? (
                <p style={{ marginLeft: "76px", color: "red" }}>
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <input
            type="submit"
            style={{ width: "80px", marginLeft: "220px", marginTop: "20px" }}
            value="Submit"
          />
        </div>
      </form>
}
    </div>
  );
};

export default EditForm;
