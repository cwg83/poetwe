import React, { useEffect, useState } from "react";

interface HeaderProps {
  authenticated: boolean,
  toggleLoginModal: Function
}

const Header: React.FC<HeaderProps> = ({authenticated, toggleLoginModal})  : JSX.Element => {
  return (
    <div id="header">
      <div id="navbar">
        <div className="navbar-item" id="navbar-home">Home</div>
        <div className="navbar-item" id="navbar-about">About</div>
        {authenticated ?
          <div className="navbar-item" id="navbar-login">Logout</div>
        :
          <div className="navbar-item" id="navbar-login" onClick={() => toggleLoginModal()}>Login</div>
        }

      </div>
    </div>
  );
}

export default Header;