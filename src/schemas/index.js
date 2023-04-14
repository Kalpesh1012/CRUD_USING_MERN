import * as Yup from "yup";

export const signupSchmas=Yup.object({
    name:Yup.string().min(2).max(22).required("Please Enter Your Name"),
    lname:Yup.string().min(2).max(22).required("Please Enter Your Last-Name"),
    email:Yup.string().email().required("Please Enter Your Email")
})