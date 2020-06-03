import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container,
  Button
} from "reactstrap";

export const Heading = () => {

   const { filterByAge } = useContext(GlobalContext);

  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Employees</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add User</Link>
            <Button onClick={filterByAge} style={{margin: 20}}>Filter by age</Button>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
