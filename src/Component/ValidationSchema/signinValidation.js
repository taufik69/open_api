import * as Yup from "yup";
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export let Signinvalidation = Yup.object({
  email: Yup.string()
    .email()
    .matches(mailFormat, "invalid email adress")
    .required("Email must required"),
  password: Yup.string()
    .min(8, "Must be 8 chracter or higher")
    .max(20, "Must be 20 characters or less")
    .matches(
      passwordFormat,
      "Password  contain at least 8 characters,  uppercase,  number  one special character"
    )
    .required("Password must required"),
});
