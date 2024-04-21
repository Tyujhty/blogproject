import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex gap-8 justify-center my-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/article/add"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Ajouter un article
        </NavLink>
      </nav>
    </>
  );
}
