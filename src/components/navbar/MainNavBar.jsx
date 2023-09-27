import React from 'react';
import { Navbar, Container, Image, NavDropdown, Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function MainNavBar() {
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
						<Form inline>
							<Row>
								<Col xs="auto">
									<Form.Control type="text" placeholder="Search" className=" mr-sm-2"/>
								</Col>
							</Row>
						</Form>
					<Nav.Item>
						<Nav.Link href="/home">Cart</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/home">Order</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/home">Category</Nav.Link>
					</Nav.Item>
						<NavDropdown title={user.username} >
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
export default MainNavBar;