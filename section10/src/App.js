import React, { useContext } from 'react';

import AuthContext from './store/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const context = useContext(AuthContext)

  return (
    <>
      <MainHeader/>
      <main>
        {!context.isLoggedIn && <Login onLogin={context.loginHandler}/>}
        {context.isLoggedIn && <Home onLogout={context.logoutHandler}/>}
      </main>
    </>
  );
}

export default App;
