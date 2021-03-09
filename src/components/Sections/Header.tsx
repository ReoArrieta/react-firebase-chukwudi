import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import Button from "../UI/Button";
import { RootState } from "../../store";
import { signout } from "../../store/actions/authActions";

// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./SidebarData";
// import "./Header.css";
// import { IconContext } from "react-icons";

import acount from "../../assets/icons/747376.svg";
import search from "../../assets/icons/126474.svg";
import notification from '../../assets/images/3.png';

const Header: FC = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector((state: RootState) => state.auth);

  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  const logoutClickHandler = () => {
    dispatch(signout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="container-fluid">
          <Link
            className="navbar-brand boldHeader"
            // to={!authenticated ? "/" : "/"}
            to="/"
          >
            <i className="bi bi-list" ></i> Chukwudi
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ml-auto col-md-9">
              <button className="btn" type="button" id="button-addon1">
                <img src={search} className="sizeSvgHeader" alt="" />
              </button>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {!authenticated ? (
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                  <Button
                    text="Registrarse"
                    onClick={() => history.push("/signup")}
                    className="primary m-1"
                  ></Button>
                  <Button
                    text="Iniciar sesión"
                    onClick={() => history.push("/signin")}
                    className="secondary"
                  ></Button>
                </li> */}
                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={acount} className="sizeSvgHeader" alt="" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        to="/signin"
                        className="dropdown-item"
                      >
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="dropdown-item"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={acount} className="sizeSvgHeader" alt="" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="dropdown-item">{user?.firstName}</li>
                    <li>
                      <Link
                        to=""
                        onClick={logoutClickHandler}
                        className="dropdown-item"
                      >
                        Cerrar sesión
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <img src={notification} className="sizePngHeader" alt=""/>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* Sidebar de prueba */}
      {/* <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
        </ul>
      </div> */}
    </nav>

    // <>
    //   <IconContext.Provider value={{ color: "#fff" }}>
    //     <div className="navbar">
    //       <Link to="#" className="menu-bars">
    //         <FaIcons.FaBars onClick={showSidebar} />
    //       </Link>
    //     </div>
    //     <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    //       <ul className="nav-menu-items" onClick={showSidebar}>
    //         <li className="navbar-toggle"></li>
    //       </ul>
    //     </nav>
    //   </IconContext.Provider>
    // </>
  );
};

export default Header;
