import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}