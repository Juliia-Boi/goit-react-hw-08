import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.pageContainer}>
      <h2 className={css.pageTitle}>Create an account</h2>
      <RegisterForm />
    </div>
  );
}
