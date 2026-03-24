import { useState, useRef } from "react";
import styles from "./FormRegistration.module.scss";

function FormRegistration() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepetPassword, setShowRepeatPassword] = useState(false);
  const submitButtonRef = useRef(null);

  const emailRegex =
    /^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9-])*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@#$%^&*])[a-zA-Z\d#@#$%^&*]{8,128}$/;

  const checkSubmitFocus = (data) => {
    const newData = {
      email,
      password,
      repeatPassword,
      emailError,
      passwordError,
      repeatPasswordError,
      ...data,
    };
    if (
      !newData.emailError &&
      !newData.passwordError &&
      !newData.repeatPasswordError &&
      newData.email &&
      newData.password &&
      newData.repeatPassword
    ) {
      setTimeout(() => {
        submitButtonRef.current?.focus();
      }, 0);
    }
  };

  const onEmailChange = ({ target }) => {
    const value = target.value;
    let error = null;
    if (!emailRegex.test(value)) {
      error = "email invalid";
    }
    setEmail(value);
    setEmailError(error);
    checkSubmitFocus({
      email: value,
      emailError: error,
    });
  };

  const onPasswordChange = ({ target }) => {
    const value = target.value;
    let error = null;
    if (!passwordRegex.test(value)) {
      error = "invalid password";
    }
    setPassword(target.value);
    setPasswordError(error);
    checkSubmitFocus({
      password: value,
      passwordError: error,
    });
  };

  const onRepeatPasswordChange = ({ target }) => {
    const value = target.value;
    let error = null;
    if (target.value !== password) {
      error = "the passwords must match";
    }
    setRepeatPassword(target.value);
    setRepeatPasswordError(error);
    checkSubmitFocus({
      repeatPassword: value,
      repeatPasswordError: error,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.FormRegistration} onSubmit={onSubmit}>
          <h1>Sign up</h1>
          {emailError && <div className={styles.errorLabel}>{emailError}</div>}

          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={onEmailChange}
          />

          {passwordError && (
            <div className={styles.errorLabel}>{passwordError}</div>
          )}

          <input
            // type="password"
            type="text"
            name="password"
            value={password}
            placeholder="password"
            onChange={onPasswordChange}
          />

          {repeatPasswordError && (
            <div className={styles.errorLabel}>{repeatPasswordError}</div>
          )}
          <input
            // type="password"
            type="text"
            name="repeatPassword"
            value={repeatPassword}
            placeholder="repeat password"
            onChange={onRepeatPasswordChange}
          />
          <button
            ref={submitButtonRef}
            disabled={
              !!emailError ||
              !!passwordError ||
              !!repeatPasswordError ||
              !email ||
              !password ||
              !repeatPassword
            }
          >
            send
          </button>
        </form>
      </div>
    </>
  );
}

export default FormRegistration;
