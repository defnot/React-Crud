import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Heading } from "./Heading";
import { UserList } from "./UserList";


import axios from 'axios';

export const Home = () => {
  const [ employees, setEmployees ] = useState({ employees: [] })

  const { removeUser } = useContext(GlobalContext);

  const { addUser } = useContext(GlobalContext);
	
	useEffect(() => {
		async function fetchData() {
			const result = await axios('https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api/employee');
			//console.log(result.data);
			result.data.map((user, index) => {addUser(user)});
			setEmployees(result.data);
	    }

	    fetchData();		
  }, []);

  const removeEmployee = id => {
  	removeUser(id);
  	axios.delete('https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api/employee/' + id, {"id": id});
  	setEmployees(employees.filter(employee => employee.id !== id));
  }

  return (
    <>
      <Heading />
      <UserList employees={employees} removeEmployee={removeEmployee} />
    </>
  )
}
