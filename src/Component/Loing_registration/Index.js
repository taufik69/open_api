import React, { useState } from "react";
import Input from "./Input";
import { useFormik } from "formik";
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
    onSubmit: (values) => {
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
              type="text"
              placeholder="UserName"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Example@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Input
              id="confrim"
              name="confrim"
              type="password"
              placeholder="confrim Password"
              onChange={formik.handleChange}
              value={formik.values.confrim}
            />

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
