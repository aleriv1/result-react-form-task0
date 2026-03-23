import { useState } from "react";
import styles from "./FormRegistration.module.scss";

function FormRegistration() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [repeatPasswordError, setrepeatPasswordError] = useState("");

  const emailRegex =
    /^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9-])*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

  // /^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9-])*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@#$%^&*])[a-zA-Z\d#@#$%^&*]{8,128}$/;

  const onEmailChange = ({ target }) => {
    let error = null;
    setEmail(target.value);
    if (!emailRegex.test(target.value)) {
      error = "email invalid";
    }
    console.log("error", error);
    setEmailError(error);
  };
  const onPasswordChange = () => {};
  const onRepeatPasswordChange = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.FormRegistration} onSubmit={onSubmit}>
          <h1>Alena</h1>
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
            type="password"
            name=""
            value={password}
            placeholder="password"
            onChange={onPasswordChange}
          />
          {repeatPasswordError && (
            <div className={styles.errorLabel}>{repeatPasswordError}</div>
          )}
          <input
            type="password"
            name="repeatPassword"
            value={repeatPassword}
            placeholder="repeat password"
            onChange={onRepeatPasswordChange}
          />
          <button
            disabled={!!emailError || !!passwordError || !!repeatPasswordError}
          >
            send
          </button>
        </form>
      </div>
    </>
  );
}

export default FormRegistration;
