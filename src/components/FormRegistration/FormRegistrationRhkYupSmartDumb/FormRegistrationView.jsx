import styles from "../FormRegistration.module.scss";

function FormRegistrationView({
  register,
  errors,
  touchedFields,
  isValid,
  onSubmit,
  submitButtonRef,
}) {
  return (
    <div className={styles.formContainer}>
      <form className={styles.FormRegistration} onSubmit={onSubmit}>
        <h1>Registration (Smart/Dumb)</h1>

        {errors.email && touchedFields.email ? (
          <div className={styles.errorLabel}>{errors.email.message}</div>
        ) : (
          <div className={styles.labelTitle}>Email</div>
        )}

        <input type="email" placeholder="email" {...register("email")} />

        {errors.password && touchedFields.password ? (
          <div className={styles.errorLabel}>{errors.password.message}</div>
        ) : (
          <div className={styles.labelTitle}>Password</div>
        )}

        <input type="text" placeholder="password" {...register("password")} />

        {errors.repeatPassword && touchedFields.repeatPassword ? (
          <div className={styles.errorLabel}>
            {errors.repeatPassword.message}
          </div>
        ) : (
          <div className={styles.labelTitle}>Repeat password</div>
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

export default FormRegistrationView;
