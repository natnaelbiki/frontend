import React from 'react';
import { Navbar, Container, Image, NavDropdown, Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function DeliveryNavBar() {
	const navigate = useNavigate();
	const { user } = JSON.parse(localStorage.getItem("auth"));

	const handleLogout = () => {
		localStorage.removeItem("auth");
		navigate('/login/');
	};
	return (
		<Navbar bg="primary" variant="dark">
		 	<Container>
				<Navbar.Brand className="fw-bold" href="/">Dicha Deli</Navbar.Brand>
				<Nav>
					<Navbar.Collapse className="justify-content-end">
					<Nav.Item>
						<Nav.Link href="/home">deli Active</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/home">deli Active 1</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/home">deli Active 2</Nav.Link>
					</Nav.Item>
						<NavDropdown title={<Image src='/logo.svg' alt={user.username} roundedCircle width={36} height={36}/>}>
							<NavDropdown.Item href="#">Profile</NavDropdown.Item>
							<NavDropdown.Item href="#">Change Password</NavDropdown.Item>
							<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
						</NavDropdown>				 
					 </Navbar.Collapse>
				 </Nav>
		 	</Container>
		</Navbar>
	);
}
export default DeliveryNavBar;