import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import HeaderSTL from './headerSTL.styled';
import githubIcon from '../../images/githubIcon.svg';

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname === '/' ? true : false)
  return (
    <HeaderSTL>
      <section>
        <img src={githubIcon} alt="github icon"/>
        <div>
          <label>
            <Link to="/">
              <p className={pathname === '/' ? 'tagHeaderTrue' : 'tagHeaderFalse'}>Home</p>
              <div className={pathname === '/' ? 'dashHeaderTrue' : 'dashHeaderFalse'}/>
            </Link>
          </label>
          <label>
            <Link to="/search">
              <p className={pathname === '/search' ? 'tagHeaderTrue' : 'tagHeaderFalse'}>Search</p>
              <div className={pathname === '/search' ? 'dashHeaderTrue' : 'dashHeaderFalse'}/>
            </Link>
          </label>
          <label>
            <Link to="/repositories">
              <p className={pathname === '/repositories' ? 'tagHeaderTrue' : 'tagHeaderFalse'}>Repositories</p>
              <div className={pathname === '/repositories' ? 'dashHeaderTrue' : 'dashHeaderFalse'} />
            </Link>
          </label>
        </div>
        <strong></strong>
      </section>
    </HeaderSTL>
  );
};

export default Header;
