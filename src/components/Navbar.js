import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

const NavbarComponent = ({ totalCounters }) => {
   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand>
               Navbar{" "}
               <Badge bg="secondary" style={{ marginLeft: 20 }}>
                  {totalCounters}
               </Badge>{" "}
            </Navbar.Brand>
         </Container>
      </Navbar>
   );
};

export default NavbarComponent;
