// import { useState } from "react";
// import { Redirect, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
const { registerForm, registerLabelClass, registerInputClass } = styles;

function RegisterForm({ name, setName, password, setPassword }) {
  // }
  return (
    <div>
      <h1>Registeration Form</h1>
      {/* <form className={registerForm} onSubmit={handleSubmit}> */}
      <form className={registerForm}>
        <label className={registerLabelClass} htmlFor="name">
          Name
        </label>
        <input
          className={registerInputClass}
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className={registerLabelClass} htmlFor="name">
          Password
        </label>
        <input
          className={registerInputClass}
          type="password"
          placeholder="Please enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {/* <Link to={"/"}>
          <input type="submit" value="Register" />
        </Link> */}
        {/* <input className={registerInputClass} type="submit" value="Register" /> */}
      </form>
    </div>
  );
}

export default RegisterForm;
