import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import Logo from "../../image/Logo/Logo.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Header = ({ onHeaderHeight, onMouseEnter, onMouseLeave }) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navRef = useRef(null);

  let resizeTimer = null;

  useEffect(() => {
    const handleHeaderHeight = () => {
      if (navRef.current) {
        const headerHeight = navRef.current.offsetHeight;
        onHeaderHeight(headerHeight);
      }
    };

    handleHeaderHeight();

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleHeaderHeight, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onHeaderHeight]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1250px)");
    const handleMediaQueryChange = (mediaQuery) =>
      setIsSmallScreen(mediaQuery.matches);
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavVisibility(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleNav = () => {
    setNavVisibility((prevState) => !prevState);
  };

  const closeNav = () => {
    setNavVisibility(false);
  };

  return (
    <header className="Header">
      <img src={Logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav ref={navRef} className="Nav text">
          <Link
           onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            to="section1"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            <NavLink className="aa" to="/" onClick={closeNav}>
              Главное
            </NavLink>
          </Link>
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
          >
            <NavLink to="/" onClick={closeNav}>
              О_нас
            </NavLink>
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
          >
            <NavLink to="/" onClick={closeNav}>
              Курсы
            </NavLink>
          </Link>
          <Link
            to="Results"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
          >
            <NavLink to="/" onClick={closeNav}>
              Полученные_результаты
            </NavLink>
          </Link>
          <Link
            to="Themes"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
          >
            <NavLink to="/" onClick={closeNav}>
              Темы
            </NavLink>
          </Link>
          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
          >
            <NavLink to="/" onClick={closeNav}>
              Контакты
            </NavLink>
          </Link>
          <Link 
             to="Lesson"
             spy={true}
             smooth={true}
             offset={-120}
             duration={500}
             onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             >
          <NavLink to="/Sign_up" onClick={closeNav}>
           
                <button>Записаться на урок</button>
          </NavLink>
          </Link>
        </nav>
      </CSSTransition>
      {isSmallScreen && (
        <button onClick={toggleNav} className="Burger">
          🍔
        </button>
      )}
    </header>
  );
};

export default Header;
