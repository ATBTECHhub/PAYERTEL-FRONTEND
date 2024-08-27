import { Formik } from "formik";
import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(8, "Name too short")

    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password must be atleast 5 characters long")
    .required("Required"),
});
