import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.loginForm}>
          <label className={css.loginLabel}>
            Email
            <Field name="email" type="email" className={css.loginInput} />
          </label>
          <label className={css.loginLabel}>
            Password
            <Field name="password" type="password" className={css.loginInput} />
          </label>
          <button type="submit" className={css.loginButton}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
