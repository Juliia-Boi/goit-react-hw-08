import { Formik, Form, Field } from "formik";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.registerForm}>
          <label className={css.registerLabel}>
            Username
            <Field
              className={css.registerInput}
              name="name"
              type="text"
              required
            />
          </label>
          <label className={css.registerLabel}>
            Email
            <Field
              className={css.registerInput}
              name="email"
              type="email"
              required
            />
          </label>
          <label className={css.registerLabel}>
            Password
            <Field
              className={css.registerInput}
              name="password"
              type="password"
              required
            />
          </label>
          <button className={css.registerButton} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
