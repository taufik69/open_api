import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "../Loing_registration/Input";
import { Signinvalidation } from "../ValidationSchema/signinValidation";
import { FiEye } from "react-icons/fi";
import { HiOutlineEyeOff } from "react-icons/hi";

const Login = () => {
  const [eye, seteye] = useState(true);
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
      <form
        onSubmit={formik.handleSubmit}
        className=" w-[100%] min-h-screen 2xl:pb-52"
      >
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
          className="relative"
          type={eye ? "password" : "text"}
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {eye ? (
          <FiEye
            className="absolute right-[10%] top-[61%] text-[20px] cursor-pointer"
            onClick={() => seteye(!eye)}
          />
        ) : (
          <HiOutlineEyeOff
            className="absolute right-[10%] top-[61%] text-[20px] cursor-pointer"
            onClick={() => seteye(!eye)}
          />
        )}

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
