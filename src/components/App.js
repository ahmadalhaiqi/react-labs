import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateLink from "./Link/CreateLink";
import AddLab1 from "./Lab/Add/AddLab1";
import AddLab2 from "./Lab/Add/AddLab2";
import AddLab3 from "./Lab/Add/AddLab3";
import AddLab4 from "./Lab/Add/AddLab4";
import AddLab5 from "./Lab/Add/AddLab5";
import AddLab6 from "./Lab/Add/AddLab6";
import AddLab7 from "./Lab/Add/AddLab7";
import EditLab1 from "./Lab/Edit/EditLab1";
import EditLab2 from "./Lab/Edit/EditLab2";
import EditLab3 from "./Lab/Edit/EditLab3";
import EditLab4 from "./Lab/Edit/EditLab4";
import EditLab5 from "./Lab/Edit/EditLab5";
import EditLab6 from "./Lab/Edit/EditLab6";
import EditLab7 from "./Lab/Edit/EditLab7";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import LabList from "./Lab/LabList";
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
              <Route path="/add-lab1" component={AddLab1} />
              <Route path="/add-lab2" component={AddLab2} />
              <Route path="/add-lab3" component={AddLab3} />
              <Route path="/add-lab4" component={AddLab4} />
              <Route path="/add-lab5" component={AddLab5} />
              <Route path="/add-lab6" component={AddLab6} />
              <Route path="/add-lab7" component={AddLab7} />
              <Route path="/edit-lab1" component={EditLab1} />
              <Route path="/edit-lab2" component={EditLab2} />
              <Route path="/edit-lab3" component={EditLab3} />
              <Route path="/edit-lab4" component={EditLab4} />
              <Route path="/edit-lab5" component={EditLab5} />
              <Route path="/edit-lab6" component={EditLab6} />
              <Route path="/edit-lab7" component={EditLab7} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
