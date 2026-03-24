import * as yup from "yup";

const emailRegex =
  /^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9-])*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@#$%^&*])[a-zA-Z\d#@#$%^&*]{8,128}$/;

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegex, "email invalid"),
  password: yup
    .string()
    .required("Password is required")
    .matches(passwordRegex, "invalid password"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "the passwords must match")
    .required("Repeat password is required"),
});
