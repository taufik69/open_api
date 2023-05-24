import React, { useState } from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { Signupvalidation } from "../ValidationSchema/signupValidation";
import Login from "../MainComponent/Login";
import "./allloginrscss/Indexlogres.css";
import "./allloginrscss/bigdeviceResponsive.css";
import "./allloginrscss/medium.css";
import "./allloginrscss/small.css";
import "./allloginrscss/extraSmall.css";

const Index = () => {
  const [addclass, setaddclass] = useState("");
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confrim: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Signupvalidation,
    onSubmit: async (values) => {
      console.log("input vlaues is : ", values);
    },
  });

  return (
    <>
      <div className={`container ${addclass}`} id="container">
        <div className="form-container  sign-up-container">
          <form onSubmit={formik.handleSubmit}>
            <h1>Create an Account</h1>
            <Input
              id="username"
              name="username"
              className=""
              type="text"
              placeholder="UserName"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username ? (
              <p className=" -ml-[3%] text-sm text-red-700">
                {formik.errors.username}
              </p>
            ) : null}
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="-ml-[3%] text-sm text-red-700">
                {formik.errors.email}
              </p>
            ) : null}
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="-ml-[1%] text-sm text-red-700">
                {formik.errors.password}
              </p>
            ) : null}
            <Input
              id="confrim"
              name="confrim"
              type="password"
              placeholder="confrim Password"
              onChange={formik.handleChange}
              value={formik.values.confrim}
            />
            {formik.errors.confrim && formik.touched.confrim ? (
              <p className="-ml-[2%] text-sm text-red-700">
                {formik.errors.confrim}
              </p>
            ) : null}

            <button type="submit" className="normal_btn">
              REGISTER
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <Login />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <button
                className="ghost"
                id="ghost"
                onClick={() => setaddclass("")}
              >
                GO TO LOGIN
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <button
                className="ghost"
                id="ghost"
                onClick={() => setaddclass("right-panel-active")}
              >
                GO TO REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
