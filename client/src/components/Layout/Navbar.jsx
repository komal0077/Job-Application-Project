import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  // const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const { isAuthorized, setIsAuthorized} = useContext(Context);
  const user =localStorage.getItem("role")||"";
  const navigateTo = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(
        `https://backend-food-deploy.onrender.com/api/v1/user/logout`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(true);
      localStorage.removeItem("auth");
      localStorage.removeItem("role");
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };
  const auth= localStorage.getItem("auth")
  return (
    <nav className={auth ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
<img src="https://t3.ftcdn.net/jpg/05/07/85/46/360_F_507854602_bhxzxAByrbBvmgJpLpfAWt5zQG1X8QLn.jpg" alt="logo"/>
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user === "Employer"
                ? "APPLICANT'S APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
          </li>
          {user === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  POST NEW JOB
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <button onClick={handleLogout}>LOGOUT</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;