import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p>Welcome, {user.name}!</p>
      <button
        className={css.logOutPulse}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </button>
    </div>
  );
}