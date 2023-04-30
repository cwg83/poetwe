import React, { useEffect, useState } from "react";

export default function LoginModal({toggleLoginModal, toggleSignupModal}) {

  const handleTextClick = (e) => {
    e.preventDefault();
    toggleLoginModal();
    toggleSignupModal();
  }

  return (
    <div id="login-modal" className="modal-popup flex-column-center">
      <div className="close" onClick={() => toggleLoginModal()}></div>
      <form id="login-form" className="flex-column-center">
        <input id="login-email-input" name="login-email-input" placeholder="Email"/>
        <input id="login-password-input" name="login-password-input" placeholder="Password"/>
        <button id="login-submit">Login</button>
      </form>
      <div id="login-text">Or click <a href='#' onClick={(e) => handleTextClick(e)}>HERE</a> to register.</div>
    </div>
  );
}