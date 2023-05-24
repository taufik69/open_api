import React from "react";
import { useFormik } from "formik";
import Input from "../Loing_registration/Input";
import { Signinvalidation } from "../ValidationSchema/signinValidation";
import { FiEye } from "react-icons/fi";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Signinvalidation,
    onSubmit: async (values) => {
      console.log("input vlaues is : ", values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className=" w-[100%] min-h-screen">
        <h1>Login</h1>
        <Input
          id="email"
          name="email"
          className=""
          type="email"
          placeholder=" Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className=" -ml-[3%] text-sm text-red-700">
            {formik.errors.email}
          </p>
        ) : null}
        <Input
          id="password"
          name="password"
          className=""
          type="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <p className=" -ml-[3%] text-sm text-red-700">
            {formik.errors.password}
          </p>
        ) : null}
        <button type="submit" className="normal_btn">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
