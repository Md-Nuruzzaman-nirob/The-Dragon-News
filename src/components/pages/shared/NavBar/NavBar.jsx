import { Link, NavLink } from "react-router-dom";
import avatar from "../../../../assets/user.png";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-white bg-[#D72050] px-2 lg:px-3 py-1 rounded"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-white bg-[#D72050] px-2 lg:px-3 py-1 rounded"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/career"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-white bg-[#D72050] px-2 lg:px-3 py-1 rounded"
              : ""
          }
        >
          Career
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar justify-between p-0 bg-base-100 mb-20 ">
      <div className="navbar-start hidden lg:block"></div>
      <div className="navbar-center">
        <ul className="flex items-center gap-3 md:gap-6 text-xs md:text-sm lg:text-base">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <img className="w-6 md:w-8 lg:w-12 mr-2 lg:mr-3" src={avatar} alt="" />
        <Link className="btn btn-xs md:btn-sm lg:btn-md bg-black hover:bg-black text-white lg:text-lg font-medium px-4 md:px-5 lg:px-8 lg:py-2 rounded">
          Login
        </Link>
        {/* <Link className="bg-black text-white text-xs md:text-sm lg:text-lg font-medium px-3 lg:px-8 py-1 lg:py-2 rounded">
          Login
        </Link> */}
      </div>
    </div>
  );
};

export default NavBar;
