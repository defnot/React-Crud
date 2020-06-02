import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Heading } from "./Heading";
import { UserList } from "./UserList";


import axios from 'axios';

export const Home = () => {
  const [ employees, setEmployees ] = useState({ employees: [] })

  const { users, removeUser } = useContext(GlobalContext);

  const { addUser } = useContext(GlobalContext);
  

	// Data
	/* const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	] */
	
	useEffect(() => {
		async function fetchData() {
			const result = await axios('https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api/employee');
			//console.log(result.data);
			result.data.map((user, index) => {addUser(user)});
			setEmployees(result.data);
	    }

	    fetchData();

	    console.log('how many times I ran')
	    
	    //employees.map(employee => addUser(employee));	
		
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
