import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import HeaderSTL from "./headerSTL.styled";

const Header = () => {
  return (
    <HeaderSTL>
        <img />
        <div>
          <Link to='/'>
            <label>
              <p>
                Home
              </p>
              <div />
            </label>
          </Link>
          <Link to='/search'>
            <label>
              <p>
                Search
              </p>
              <div />
            </label>
          </Link>
          <Link to='/repositories'>
            <label>
              <p>
                Repositories
              </p>
              <div />
            </label>
          </Link>
        </div>
        <div />
    </HeaderSTL>
  )
};

export default Header;