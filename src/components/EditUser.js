import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

import '../App.css';

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

  const currentUserId = props.match.params.id;

  const history = useHistory();

  useEffect(() => {
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
    editUser(selectedEmployee);
    editEmployee();
  
    history.push("/")
  }
  async function editEmployee() {
    const url = 'https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api/employee/' + currentUserId;

    axios.put(url, selectedEmployee);
    
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Employee</Label>
        <Input className="Input-Style" type="text" value={selectedEmployee ? selectedEmployee.employee_name : ""} onChange={onChangeName} name="name" placeholder="Enter Name" required></Input>
        <Input className="Input-Style" type="text" value={selectedEmployee ? selectedEmployee.employee_salary: ""} onChange={onChangeSalary} name="salary" placeholder="Enter Salary" required></Input>
        <Input className="Input-Style" type="text" value={selectedEmployee ? selectedEmployee.employee_age: ""} onChange={onChangeAge} name="age" placeholder="Enter Age" required></Input>
      </FormGroup>
      <Button className="Input-Style" type="submit">Edit Employee</Button>
      <Link className="Input-Style" to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
