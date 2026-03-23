import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormRegistrationReactHookFormYup.module.scss";

const emailRegex =
  /^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9-])*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@#$%^&*])[a-zA-Z\d#@#$%^&*]{8,128}$/;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegex, "email invalid"),
  password: yup
    .string()
    .required("Password is required")
    .matches(passwordRegex, "invalid password"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "the passwords must match")
    .required("Repeat password is required"),
});

function FormRegistrationReactHookFormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const submitButtonRef = useRef(null);

  useEffect(() => {
    if (isValid) {
      submitButtonRef.current?.focus();
    }
  }, [isValid]);

  const onSubmit = (data) => {
    console.log(data.email, data.password);
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.FormRegistration}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Alena (RHF + Yup)</h1>

        {errors.email && (
          <div className={styles.errorLabel}>{errors.email.message}</div>
        )}
        <input type="email" placeholder="email" {...register("email")} />

        {errors.password && (
          <div className={styles.errorLabel}>{errors.password.message}</div>
        )}
        <input type="text" placeholder="password" {...register("password")} />

        {errors.repeatPassword && (
          <div className={styles.errorLabel}>
            {errors.repeatPassword.message}
          </div>
        )}
        <input
          type="text"
          placeholder="repeat password"
          {...register("repeatPassword")}
        />

        <button ref={submitButtonRef} type="submit" disabled={!isValid}>
          send
        </button>
      </form>
    </div>
  );
}

export default FormRegistrationReactHookFormYup;
