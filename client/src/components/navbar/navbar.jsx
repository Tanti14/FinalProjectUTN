import React, { useRef, useState, useEffect } from "react";
import navLogo from "../../assets/img/logotext.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import {
  HeaderSection,
  NavContainer,
  NavBtnContainer,
  NavImgContainer,
  MobileNavbarBtn,
  UserBtnContainer,
} from "./styles";

export const Navbar = () => {
  /* 0 = Cerrado
     1 = Abierto 
  */

  const [menuState, setMenuState] = useState(0);
  const refMenuBtn = useRef(),
    refMenu = useRef();

  const handleToggleMenu = () => {
    if (menuState === 0) {
      setMenuState((prev) => prev + 1);
      refMenu.current.style.transform = "translate(0)";
    } else {
      setMenuState(0);
      refMenu.current.style.transform = "translate(105%)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== 0 && menuState === 1) {
        setMenuState(0);
        refMenu.current.style.transform = "translate(105%)";
      }
    };

    const closeOn1Click = () => {
      if (menuState !== 0) {
        setMenuState(0);
        refMenu.current.style.transform = "translate(105%)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", closeOn1Click);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", closeOn1Click);
    };
  }, [menuState]);

  /* ======================================================================= */

  const [btnState, setBtnState] = useState(0);
  const refUserBtn = useRef(),
    refUserBtns = useRef();

  const handleToggleUserBtns = () => {
    if (btnState === 0) {
      setBtnState((prev) => prev + 1);
      refUserBtns.current.style.transform = "translate(0)";
    } else {
      setBtnState(0);
      refUserBtns.current.style.transform = "translate(105%)";
    }
  };

  useEffect(() => {
    const closeOnClick = () => {
      if (btnState !== 0) {
        setBtnState(0);
        refUserBtns.current.style.transform = "translate(105%)";
      }
    };
    window.addEventListener("mousedown", closeOnClick);

    return () => {
      window.removeEventListener("mousedown", closeOnClick);
    };
  }, [btnState]);

  return (
    <HeaderSection>
      <NavContainer>
        <NavImgContainer>
          <NavLink to="/">
            <img src={navLogo} alt="" />
          </NavLink>
        </NavImgContainer>

        <MobileNavbarBtn>
          <FontAwesomeIcon
            onClick={handleToggleMenu}
            ref={refMenuBtn}
            icon={faBars}
            style={{ color: "#ffffff" }}
          />
        </MobileNavbarBtn>

        <NavBtnContainer ref={refMenu}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Sobre Nosotros
          </NavLink>
         {/*  <NavLink
            to="/contact"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Informar un Problema
          </NavLink> */}
        </NavBtnContainer>

        <NavLink>
          <FontAwesomeIcon
            onClick={handleToggleUserBtns}
            ref={refUserBtn}
            icon={faUser}
            style={{ color: "#ffffff" }}
          />
        </NavLink>

        <UserBtnContainer ref={refUserBtns}>
          <NavLink to="/login">Iniciar Sesion</NavLink>
          <NavLink to="/register">Registrarse</NavLink>
        </UserBtnContainer>
      </NavContainer>
    </HeaderSection>
  );
};
