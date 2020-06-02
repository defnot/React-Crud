import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {useHistory } from "react-router-dom";

import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

import axios from 'axios';

export const UserList = props => {

  const { users } = useContext(GlobalContext);
  
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((employee, index) => (
            <ListGroupItem className="d-flex" key={index}>
              <strong>{employee.employee_name}, Salary: {employee.employee_salary} $</strong>
              <div className="ml-auto" key={index}>
                <Link to={`/edit/${employee.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => props.removeEmployee(employee.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </ListGroup>
  )
}
