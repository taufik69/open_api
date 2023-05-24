import React, { useState } from "react";
import Input from "./Input";
import { FiEye } from "react-icons/fi";
import { HiOutlineEyeOff } from "react-icons/hi";
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
  const [eye, seteye] = useState(true);
  const [eyeForConfrim, seteyeForConfrim] = useState(true);
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
              className="className"
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
              className="relative"
              type={eye ? "password" : "text"}
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {eye ? (
              <FiEye
                className="absolute right-[9%] top-[54%] text-[20px] cursor-pointer"
                onClick={() => seteye(!eye)}
              />
            ) : (
              <HiOutlineEyeOff
                className="absolute right-[9%] top-[54%] text-[20px] cursor-pointer"
                onClick={() => seteye(!eye)}
              />
            )}
            {formik.errors.password && formik.touched.password ? (
              <p className="-ml-[1%] text-sm text-red-700">
                {formik.errors.password}
              </p>
            ) : null}
            <Input
              id="confrim"
              name="confrim"
              className="relative"
              type={eyeForConfrim ? "password" : "text"}
              placeholder="confrim Password"
              onChange={formik.handleChange}
              value={formik.values.confrim}
            />
            {eyeForConfrim ? (
              <FiEye
                className="absolute right-[9%] top-[69%] text-[20px] cursor-pointer"
                onClick={() => seteyeForConfrim(!eyeForConfrim)}
              />
            ) : (
              <HiOutlineEyeOff
                className="absolute right-[9%] top-[69%]  text-[20px] cursor-pointer"
                onClick={() => seteyeForConfrim(!eyeForConfrim)}
              />
            )}
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
