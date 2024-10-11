import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Welcome to the smart phone book!
        </h1>
        <p className={css.text}>
          This phone book will help you save your important contacts effortlessly, without wasting time on notebooks
        </p>
      </div>
    </>
  );
}