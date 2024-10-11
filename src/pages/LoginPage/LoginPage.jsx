import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css"

export default function LoginPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Go to your account</h2>
      <LoginForm />
    </div>
  );
}