import React, { useState, useEffect } from "react";
import classname from "../helpers/classJoiner";
import styles from "../styles/styles.module.css";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Beritaku";
  }, []);
  return (
    <div className={classname(styles.body)}>
      <form
        className={classname(styles.login)}
        // onSubmit={handleSubmit(onSubmitSeller)}
      >
        <img
          alt="logo"
          className={classname(styles.logo)}
          src="/beritaku.png"
        />
        <p className={classname(styles.desc)}>Please login with your account</p>
        {/* {errMsg === null ? null : (
          <p className={classname(styles.errMsg)}>{errMsg}</p>
        )} */}
        <form className={classname(styles.formContainer)}>
          <div>
            <input
              className={classname(styles.loginInput)}
              placeholder="Email"
              name="email"
              // ref={register({
              //   required: "Required",
              //   pattern: {
              //     value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
              //     message: "Wrong email format",
              //   },
              // })}
            />
          </div>
          {/* <p style={{ fontSize: 16, color: "red" }}>
            {errors.email && errors.email.message}
          </p> */}

          <div>
            <input
              className={classname(styles.loginInput)}
              placeholder="Password"
              name="password"
              type="password"
              // ref={register({
              //   required: "Required",
              //   pattern: {
              //     value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
              //     message:
              //       "Password must contain at least 1 number, an uppercase letter and more than 8 characters",
              //   },
              //   // validate: value => value !== "admin" || "Nice try!"
              // })}
            />
          </div>
          {/* <p style={{ fontSize: 16, color: "red" }}>
            {errors.password && errors.password.message}
          </p> */}
          <button className={classname(styles.loginSubmit)} type="submit">
            Submit
          </button>
        </form>
      </form>
      <div className={classname(styles.signUpBtn)}>
        <p>
          Don't have a Beritaku account?{" "}
          <span onClick={() => {}}>
            {/* <Link className={classname(styles.bla)} to="/RegisterSeller">
              Register
            </Link> */}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
