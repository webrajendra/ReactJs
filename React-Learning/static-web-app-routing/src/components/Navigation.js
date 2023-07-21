import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const NavLinkStyle = ({isActive}) => {
    return {
      color: isActive ? '#746cef' : '#fff',
    }
  }
  return (
    <div className="navWrap">
      <NavLink style={NavLinkStyle} to={"/"}>Home</NavLink>
      <NavLink style={NavLinkStyle} to={"/about"}>About</NavLink>
      <NavLink style={NavLinkStyle} to={"/products"}>Products</NavLink>
      <NavLink style={NavLinkStyle} to={"/contact"}>Contact</NavLink>
    </div>
  );
}

export default Navigation;
