import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { HashRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./privateRoutes/protectedRoute";
import AuthRoute from "./privateRoutes/authRoute";
import Chats from "./components/Chats";
import Contacts from "./components/Contacts";

function App() {
  const [loginView, setLoginView] = useState("signUp");
  return (
    <HashRouter>
      <Switch>
        <AuthRoute exact path="/">
          {loginView === "signUp" ? (
            <SignUp changeLoginView={() => setLoginView("signIn")} />
          ) : (
            <SignIn changeLoginView={() => setLoginView("signUp")} />
          )}
        </AuthRoute>
        <ProtectedRoute exact path="/chats" component={Chats} />
        <ProtectedRoute exact path="/contacts" component={Contacts} />
      </Switch>
    </HashRouter>
  );
}

export default App;
