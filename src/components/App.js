import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateLink from "./Link/CreateLink";
import Lab1 from "./Lab/Lab1";
import Lab2 from "./Lab/Lab2";
import Lab3 from "./Lab/Lab3";
import Lab4 from "./Lab/Lab4";
import Lab5 from "./Lab/Lab5";
import Lab6 from "./Lab/Lab6";
import Lab7 from "./Lab/Lab7";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import LabList from "./Lab/LabList";
import LabDetail from "./Lab/LabDetail";
import Header from "./Header";
import useAuth from "./Auth/useAuth";
import firebase, { FirebaseContext } from "../firebase";

function App() {
  const user = useAuth();

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="app-container">
          <Header />
          <div className="route-container">
            <Switch>
              <Route exact path="/" component={LabList} />
              <Route path="/create" component={CreateLink} />
              <Route path="/lab1" component={Lab1} />
              <Route path="/lab2" component={Lab2} />
              <Route path="/lab3" component={Lab3} />
              <Route path="/lab4" component={Lab4} />
              <Route path="/lab5" component={Lab5} />
              <Route path="/lab6" component={Lab6} />
              <Route path="/lab7" component={Lab7} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
              <Route path="/Lab/:labId" component={LabDetail} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
