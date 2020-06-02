import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const { addUser } = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');

  async function addEmployee() {
    axios.post('https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api/employee', {
      "employee_name": name,
      "employee_salary": salary,
      "employee_age": age,
      "profile_image": ""
    })
  }
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: uuid(),
      "employee_name": name,
      "employee_salary": salary,
      "employee_age": age
    }

    console.log(newEmployee)
    addUser(newEmployee);
    addEmployee();
    history.push("/");
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeSalary = (e) => {
    setSalary(e.target.value);
  }

  const onChangeAge = (e) => {
    setAge(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChangeName} name="name" placeholder="Enter user" required></Input>
        <Input type="text" value={salary} onChange={onChangeSalary} name="salary" placeholder="Enter salary" required></Input>
        <Input type="text" value={age} onChange={onChangeAge} name="age" placeholder="Enter age" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
