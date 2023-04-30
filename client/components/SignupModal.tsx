import React, { useEffect, useState } from "react";
// import { RequestInfo, RequestInit } from "node-fetch";

import api from '../../src/http-common';

export default function SignupModal({toggleLoginModal, toggleSignupModal}) {

  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  // const [password1, setPassword1] = useState('');
  // const [password2, setPassword2] = useState('');

  const [formData, setFormData] =  useState<{email: string; username: string; password1: string; password2: string}>({
    email: '',
    username: '',
    password1: '',
    password2: ''
  });

  const handleSetFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    let updatedValue = {};
    updatedValue[name] = e.target.value;
    setFormData({
      ...formData,
      ...updatedValue
    })
  }

  const handleTextClick = (e) => {
    e.preventDefault();
    toggleLoginModal();
    toggleSignupModal();
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('clicked')
    e.preventDefault();
    var body = formData;
    api.post('/auth', body)
    .then((res) => {
      console.log("res from Post request: ", res.data);
    })
  }

  return (
    <div id="signup-modal" className="modal-popup flex-column-center">
      <div className="close" onClick={() => toggleSignupModal()}></div>
      <form id="signup-form" className="flex-column-center">
        <input id="signup-email-input" name="email" placeholder="Email" onChange={(e) => handleSetFormData(e)}/>
        <input id="login-username-input" name="username" placeholder="Username" onChange={(e) => handleSetFormData(e)}/>
        <input id="signup-password-input" name="password1" placeholder="Password" onChange={(e) => handleSetFormData(e)}/>
        <input id="signup-password-input2" name="password2" placeholder="Confirm Password" onChange={(e) => handleSetFormData(e)}/>
        <button id="signup-submit" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}>Sign Up</button>
      </form>
      <div id="signup-text">Already registered? Click <a href='#' onClick={(e) => handleTextClick(e)}>HERE</a> to login.</div>
    </div>
  );
}