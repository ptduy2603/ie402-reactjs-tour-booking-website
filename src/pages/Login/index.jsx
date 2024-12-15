import classNames from "classnames";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "~/redux/authSlice";

import styles from "./Login.module.scss";
import { validateEmail } from "~/utils";
import InputField from "~/components/InputField";
import NavigationStatement from "~/components/NavigationStatement";
import Button from "~/components/Button";
import AppLoading from "~/components/Apploading";

function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleChangeValue = (event) => {
    if (!event.target.value.startsWith(" ")) {
      const newUser = {
        ...user,
        [event.target.name]: event.target.value,
      };

      setUser(newUser);
    }
  };

  const handleInputFocus = (event) => {
    const newErrors = { ...errors };
    delete newErrors[event.target.name];

    setErrors(newErrors);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!user.email.trim()) {
      newErrors.email = "Please enter your email!";
    } else if (!validateEmail(user.email.trim())) {
      newErrors.email = "Your email is not valid!";
    }

    if (!user.password.trim()) {
      newErrors.password = "Please enter your password!";
    }

    if (!Object.keys(newErrors).length) {
      // fake login logic without api
      try {
        setIsLoading(true);
        toast.success("Login successfully!");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Login error");
      } finally {
        setTimeout(() => {
          setIsLoading(false);
          dispatch(
            login({
              user,
              token: "test login token",
            })
          );
          navigator("/", { replace: true });
        }, 2000);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={classNames(styles["form-container"], "row")}>
          <div
            className={classNames(
              styles["form-image"],
              "col col-lg-4 col-md-4 col-sm-0"
            )}
          >
            <img src="/images/logo.png" loading="lazy" alt="SGTravel logo" />
          </div>
          <div className="col col-lg-8 col-md-8 col-sm-12">
            <div className={styles["form-content"]}>
              <h2 className={styles.title}>Login</h2>
              <form action="#" method="POST">
                <div className={styles["form-group"]}>
                  <InputField
                    id="email"
                    name="email"
                    label="Email*"
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                    value={user?.email}
                    placeholder="Enter your email..."
                    onChange={handleChangeValue}
                    onFocus={handleInputFocus}
                    errorMessage={errors?.email || ""}
                  />
                </div>

                <div className={styles["form-group"]}>
                  <InputField
                    id="password"
                    name="password"
                    label="Password*"
                    icon={<FontAwesomeIcon icon={faLock} />}
                    value={user?.password}
                    placeholder="Enter your password..."
                    onChange={handleChangeValue}
                    onFocus={handleInputFocus}
                    isSecure
                    errorMessage={errors?.password || ""}
                  />
                </div>

                <div className={styles["form-group"]}>
                  <div className={styles["forgot-password"]}>
                    <Link to={"/forgot-password"}>Forgot password</Link>
                  </div>
                </div>

                <div className={styles["form-group"]}>
                  <div className={styles["horizontal-line"]}>
                    <span></span>
                    <span>or</span>
                    <span></span>
                  </div>
                  <div className={styles["login-options"]}>
                    <div className={classNames("btn")}>
                      <img alt="Google logo" src="/images/google.png" />
                      <span>Google</span>
                    </div>

                    <div className={classNames("btn")}>
                      <img alt="Facebook logo" src="/images/facebook.png" />
                      <span>Facebook</span>
                    </div>
                  </div>
                </div>

                <div className={styles["form-group"]}>
                  <NavigationStatement
                    question="Don't have an account?"
                    statement="Sign up"
                    link="/register"
                  />
                </div>
                <div className={styles["form-group"]}>
                  <Button
                    content="Login"
                    variant="primary"
                    classNames={styles["login-btn"]}
                    onClick={handleLogin}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <ToastContainer
          autoClose={1000}
          closeOnClick
          pauseOnHover
          theme="light"
        />

        {isLoading && <AppLoading />}
      </div>
    </>
  );
}

export default LoginPage;
