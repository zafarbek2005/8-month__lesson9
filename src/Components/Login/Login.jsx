import React, { useState, useEffect } from "react";
import { usePostSignInMutation } from "../redux/UserApi";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [UserName, setUsername] = useState("john32");
  const [password, setPassword] = useState("12345678");
  const navigate = useNavigate();
  const [signUp, { data, isLoading, isSuccess }] = usePostSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("x-auth-token", data.data.token);
      localStorage.setItem("user-data", JSON.stringify(data.data.user));
      navigate("/admin");
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({
      UserName,
      password,
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__bg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png" alt="wk.svg" />
        </div>
        <div className="login__form-container">
          <h1 className="login__title">Log in to WK</h1>
          <form onSubmit={handleSubmit} className="login__form">
            <input
              required
              className="login__input"
              value={UserName}
              onChange={(e) => setUsername(e.target.value)}
              name="UserName"
              type="text"
              placeholder="Username"
            />
            <input
              required
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button className="login__btn" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <a href="#" className="login__link">
              Forgot your password?
            </a>
            <hr />
            <button className="login__create-btn">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
