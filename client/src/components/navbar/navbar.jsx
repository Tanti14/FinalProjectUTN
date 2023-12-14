import React, { useRef, useState, useEffect } from "react";
import navLogo from "../../assets/img/logotext.png";
import { NavLink } from "react-router-dom";
import {
  HeaderSection,
  NavContainer,
  NavBtnContainer,
  NavImgContainer,
} from "./styles";

export const Navbar = () => {
  return (
    <HeaderSection>
      <NavContainer>
        <NavImgContainer>
          <NavLink to="/">
            <img src={navLogo} alt="" />
          </NavLink>
        </NavImgContainer>

        <NavBtnContainer>
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

          <NavLink
            to="/unknown"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Informacion Adicional
          </NavLink>
        </NavBtnContainer>
      </NavContainer>
    </HeaderSection>
  );
};
