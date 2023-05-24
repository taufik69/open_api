import * as Yup from "yup";
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export let Signupvalidation = Yup.object({
  username: Yup.string()
    .min(5, "Must be 5 character or higher")
    .max(20, "Must be 15 chracter or higher")
    .required("Please Enter your User Name"),
  email: Yup.string().email().matches(mailFormat, "invalid email adress"),
  password: Yup.string()
    .min(8, "Must be 8 chracter or higher")
    .max(20, "Must be 20 characters or less")
    .matches(
      passwordFormat,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password must required"),
  confirmPassword: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});
