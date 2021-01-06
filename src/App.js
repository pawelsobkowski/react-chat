import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { HashRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./privateRoutes/protectedRoute";
import AuthRoute from "./privateRoutes/authRoute";
import Chats from "./components/Chats";
import Contacts from "./components/Contacts";
import ChatRoom from "./components/ChatRoom";
import Profile from "./components/Profile";
import Styled from "./sharedStyles/appStyle";
import Dashboard from "./components/Dashboard";

function App() {
  const [loginView, setLoginView] = useState("signUp");
  return (
    <HashRouter>
      <Switch>
        <AuthRoute exact path="/">
          <Styled.Section>
            {loginView === "signUp" ? (
              <SignUp changeLoginView={() => setLoginView("signIn")} />
            ) : (
              <SignIn changeLoginView={() => setLoginView("signUp")} />
            )}
          </Styled.Section>
        </AuthRoute>
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        {/* <ProtectedRoute exact path="/chats" component={Chats} />
        <ProtectedRoute exact path="/contacts" component={Contacts} />
        <ProtectedRoute exact path="/m/:id" component={ChatRoom} />
        <ProtectedRoute exact path="/profile" component={Profile} /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
