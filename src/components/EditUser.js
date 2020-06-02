import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditUser = (props) => {

  const { users, editUser } = useContext(GlobalContext);

  const [selectedEmployee, setSelectedEmployee] = useState({
    id: '',
    employee_name: '',
    employee_salary: '',
    employee_age: "",
    profile_image: ''
  })

  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');

  const currentUserId = props.match.params.id;

  const history = useHistory();

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === currentUserId);
    setSelectedEmployee(selectedUser);
  }, [currentUserId, users])

  const onChangeName = (e) => {
    let newEmployee = {
      id: selectedEmployee.id,
      employee_name: e.target.value,
      employee_salary: selectedEmployee.employee_salary,
      employee_age: selectedEmployee.employee_age,
      profile_image: ''
    }
    setSelectedEmployee(newEmployee);
  }

  const onChangeSalary = (e) => {
    let newEmployee = {
      id: selectedEmployee.id,
      employee_name: selectedEmployee.employee_name,
      employee_salary: e.target.value,
      employee_age: selectedEmployee.employee_age,
      profile_image: ''
    }
    setSelectedEmployee(newEmployee);
  }

  const onChangeAge = (e) => {
    let newEmployee = {
      id: selectedEmployee.id,
      employee_name: selectedEmployee.employee_name,
      employee_salary: selectedEmployee.employee_salary,
      employee_age: e.target.value,
      profile_image: ''
    }
    setSelectedEmployee(newEmployee);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(selectedEmployee);
    editUser(selectedEmployee);
    editEmployee();
  
    history.push("/")
  }
  async function editEmployee() {
    const url = 'https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api/employee/' + currentUserId;

    axios.put(url, selectedEmployee);
    
    //axios.put('https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api/employee/' + currentUserId, {selectedEmployee});
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text"   value={selectedEmployee ? selectedEmployee.employee_name : ""} onChange={onChangeName} name="name" placeholder="Enter Name" required></Input>
        <Input type="text"   value={selectedEmployee ? selectedEmployee.employee_salary: ""} onChange={onChangeSalary} name="salary" placeholder="Enter Salary" required></Input>
        <Input type="text"   value={selectedEmployee ? selectedEmployee.employee_age: ""} onChange={onChangeAge} name="age" placeholder="Enter Age" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
