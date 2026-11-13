import { Link, NavLink } from "react-router";
import styles from "./Layout.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Logo</Link>

      <ul className={styles.nav_list}>
        <li>
          {" "}
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/about"
            end
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/games"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            Games
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
