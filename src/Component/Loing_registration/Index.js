import React, { useState } from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { Signupvalidation } from "../ValidationSchema/signupValidation";
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
              className="bg-red-600"
              type="text"
              placeholder="UserName"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username ? (
              <p className="mb-10 text-sm bg-red">{formik.errors.username}</p>
            ) : null}
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Example@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="mb-1 text-sm text-error_color">
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
              <p className="mb-1 text-sm text-error_color">
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
              <p className="mb-1 text-sm text-error_color">
                {formik.errors.confrim}
              </p>
            ) : null}

            <button type="submit" className="normal_btn">
              REGISTER
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Login</h1>
            <Input type="email" placeholder="Username or Email" />
            <Input type="password" placeholder="Password" />
            <button type="submit" className="normal_btn">
              LOGIN
            </button>
          </form>
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
