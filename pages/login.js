import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { authLoginUser } from "../utils/redux/actions/auth";
import classname from "../helpers/classJoiner";
import styles from "../styles/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState(null);

  // const { status: statusLogin, errMsg: errMsgUser, user: login } = useSelector(
  //   (state) => state.auth
  // );

  const msgInvalid = useSelector((state) => state.auth.msgInvalid);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const reviewSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });
  // const { handleSubmit, register, errors } = useForm();

  useEffect(() => {
    document.title = "Login | Beritaku";
  }, []);

  // useEffect(() => {
  if (isLogin === true) {
    return router.push("/login");
  }
  // console.log("lalla", statusLogin, errMsgUser, login.user_type);
  // }, []);

  return (
    <div className={classname(styles.body)}>
      <div className={classname(styles.login)}>
        <img
          alt="logo"
          className={classname(styles.logo)}
          src="/beritaku.png"
        />
        <p className={classname(styles.desc)}>Please login with your account</p>
        {msgInvalid === null ? null : (
          <p className={classname(styles.errMsg)}>{msgInvalid}</p>
        )}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={reviewSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(authLoginUser(values.email, values.password));
            resetForm({ values: "" });
          }}
        >
          {(props) => (
            <>
              <div className={classname(styles.formContainer)}>
                <div>
                  <input
                    className={classname(styles.loginInput)}
                    placeholder="Email"
                    name="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props && props.values.email}
                  />
                </div>
                <p style={{ fontSize: 16, color: "red" }}>
                  {props.touched.email && props.errors.email}
                </p>

                <div>
                  <input
                    className={classname(styles.loginInput)}
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props && props.values.password}
                  />
                </div>
                <p style={{ fontSize: 16, color: "red" }}>
                  {props.touched.password && props.errors.password}
                </p>
                <button
                  className={classname(styles.loginSubmit)}
                  type="submit"
                  onClick={props.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </Formik>
      </div>
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
