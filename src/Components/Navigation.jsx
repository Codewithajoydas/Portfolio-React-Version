import { NavLink, Route, Routes } from "react-router-dom";
import logo from "../assets/icon-512.svg";
import Home from "../Pages/Home";
import "./NavStyle.css";
const Navigation = () => {
  return (
    <header>
      <span
        className="logo"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          fontWeight: "bolder",
        }}
      >
        <img src={logo} alt="" />
        Codewithajoydas
      </span>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "links active" : "links")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "links active" : "links")}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "links active" : "links")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "links active" : "links")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "links active" : "links")}
        >
          Blog
        </NavLink>
      </nav>
      <div className="menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
      </div>
    </header>
  );
};
export default Navigation;
