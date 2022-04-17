import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import { Navbar, Container } from 'react-bootstrap';

function navbar(){
    return (
        <>
            <Navbar bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    </ Navbar.Brand>
                    
                </Container> 
            </Navbar>
        </>
    );
}

export default navbar;
