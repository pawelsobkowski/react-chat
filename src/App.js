import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  const [loginView, setLoginView] = useState("signUp");
  return loginView === "signUp" ? (
    <SignUp changeLoginView={() => setLoginView("signIn")} />
  ) : (
    <SignIn changeLoginView={() => setLoginView("signUp")} />
  );
}

export default App;
