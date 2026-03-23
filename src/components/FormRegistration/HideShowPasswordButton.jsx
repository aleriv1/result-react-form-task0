<button
  type="button"
  className={styles.togglePassword}
  onClick={() => setShowPassword(!showPassword)} // ADDED: переключение состояния
  tabIndex="-1" // ADDED: чтобы кнопка не фокусилась при Tab
>
  {showPassword ? "🙈" : "👁️"} {/* ADDED: иконки глаза */}
</button>;
