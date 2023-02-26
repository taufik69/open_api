import React from "react";
import "./Indexlogres.css";
const Index = () => {
  return (
    <>
      <div className="container">
        <div className="from_container sign_in_container">
          <form>
            <h2>Create an acooutn</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="password" />
            <button>sign up</button>
          </form>
        </div>

        <div className="from_container sign_up_container">
          <form>
            <h2>Login</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="password" />
            <button>sign in</button>
          </form>
        </div>

        <div className="overlay_container">
          <div className="overlay">
            <div className="overlay_panel  overlay_left">
              <button className="ghost" id="sing_in">
                Go to sign up
              </button>
            </div>
            <div className="overlay_panel ovelay_right">
              <button className="ghost" id="sing_in">
                Go to sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
