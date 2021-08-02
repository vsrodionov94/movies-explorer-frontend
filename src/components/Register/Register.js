import './Register.css';

export default function Register() {
  return(
    <div className="register">
      <header className="register__header">
        <img alt="Логотип"/>
        <h1 className="register__title">Добро пожаловать!</h1>
      </header>
      <form className="register__form">
        <input
          type="text"
          className="auth-form__field"
          placeholder="Email"
          name="email"
          id="field-email"
          required
          minLength="2"
          maxLength="30"
        />
        <input
          type="password"
          className="auth-form__field"
          placeholder="Пароль"
          name="password"
          id="field-password"
          required
          minLength="2"
          maxLength="20"
        />
      </form>
    </div>
  );
};
