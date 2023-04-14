import React, { useState } from "react";
import { useFormik } from "formik";
// import { Button } from "@mui/material";
import { signupSchmas } from "../../schemas";

import axios from "axios";
import { setUser } from "../../container/userSlice";
const initialValues = {
  name: "",
  lname: "",
  email: "",
};

const Myform = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchmas,

      onSubmit: async (values, action) => {
        console.log("RUNNNNN");
        console.log(values.name);

        await axios.post(
          "http://localhost:5000/adddata",
          {
            name: values.name,
            lname: values.lname,
            email: values.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

               action.resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{marginLeft:"680px"}}>ADD USER</h1>
      <div style={{ display: "grid", marginLeft: "500px", marginTop: "30px" }}>
        <div style={{ display: "flex", height: "auto" }}>
          <h3 style={{ marginTop: "34px" }}>Name:</h3>{" "}
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
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.name && touched.name ? (
              <p style={{ marginLeft: "90px", color: "red" }}>{errors.name}</p>
            ) : null}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h3 style={{ marginTop: "34px" }}>Last-Name:</h3>
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
              value={values.lname}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.lname && touched.lname ? (
              <p style={{ marginLeft: "50px", color: "red" }}>{errors.lname}</p>
            ) : null}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h3 style={{ marginTop: "34px" }}>EMAIL:</h3>
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
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.email && touched.email ? (
              <p style={{ marginLeft: "76px", color: "red" }}>{errors.email}</p>
            ) : null}
          </div>
        </div>

        <input type="submit" style={{width:"80px",marginLeft:"220px",marginTop:"20px"}} value="Submit" />
      </div>
    </form>
  );
};

export default Myform;
