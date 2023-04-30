import React, { useEffect, useState } from "react";
import Header from "./Header";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSignup, setShowSignup] = useState<boolean>(false);
  const [users, setUsers] = useState([]);

  interface HeaderProps {
      authenticated: Boolean;
      toggleLoginModal: Function;
  }

  const toggleLoginModal = (state:boolean) => {
    state ? setShowLogin(state) : setShowLogin(!showLogin);
  }

  const toggleSignupModal = (state:boolean) => {
    state ? setShowSignup(state) : setShowSignup(!showSignup);
  }
  useEffect(() => {
  }, []);

  return (
    <>
    <Header authenticated={authenticated} toggleLoginModal={toggleLoginModal} />
    { showLogin && <LoginModal toggleLoginModal={toggleLoginModal} toggleSignupModal={toggleSignupModal}/>}
    { showSignup && <SignupModal toggleLoginModal={toggleLoginModal} toggleSignupModal={toggleSignupModal}/>}
    </>
  );
}

export default App;