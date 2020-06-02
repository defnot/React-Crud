import React, {useEffect, useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  /*

  const { users, removeUser } = useContext(GlobalContext);
  const { addUser } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api/employee');
      //console.log(result.data);
      result.data.map((user, index) => {addUser(user)});
      //setEmployees(result.data);
      }

      fetchData();

      console.log('how many times I ran')
      
      //employees.map(employee => addUser(employee));  
    
  }, []); */

  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
