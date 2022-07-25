/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TopMenus = () => {
  const [toogle_menu, setToogleMenu] = useState(false);
  const [light, setLight] = useState(true);

  const menuClick = () => {
    setToogleMenu(!toogle_menu);
  };

  const changeTheme = () => {
    // setLight(!light);
    // check mode in localStorage
    if (localStorage.getItem("mode") === "dracula") {
      localStorage.setItem("mode", "light");
      setLight(true);
      // html data-theme="winter"
      document.querySelector("html").setAttribute("data-theme", "cupcake");
    } else {
      localStorage.setItem("mode", "dracula");
      setLight(false);
      document.querySelector("html").setAttribute("data-theme", "dracula");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("mode") === "dracula") {
      setLight(false);
      document.querySelector("html").setAttribute("data-theme", "dracula");
    } else {
      setLight(true);
      document.querySelector("html").setAttribute("data-theme", "cupcake");
    }
  }, []);

  const menu = () => {
    return (
      <>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="fasilitas">Fasilitas</NavLink>
        </li>
        <li>
          <NavLink to="galeri">Galeri</NavLink>
        </li>
        <li>
          <NavLink to="aturan">Aturan Sewa</NavLink>
        </li>
        <li>
          <a href="https://back.heidy.spartasmart.my.id" target="blank">
            Sewa
          </a>
        </li>
      </>
    );
  };
  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 font-work z-50">
      <div className="lg:navbar-start shrink w-11/12">
        <div className="dropdown" onClick={menuClick}>
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className={`${
              toogle_menu ? "show" : "hidden"
            } menu menu-compact absolute  mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52`}
          >
            {/* menu */}
            {menu()}
          </ul>
        </div>
        <div>
          <span className="uppercase font-bold lg:text-lg">
            maranatha ardipura i-iii
          </span>
        </div>
        {/* <div className="normal-case text-lg lg:text-xl font-bold">
          Pemimpin Perubahan
        </div> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* menu */}
          {menu()}
        </ul>
      </div>
      <div className="lg:navbar-end w-14">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={light}
              onChange={changeTheme}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopMenus;
