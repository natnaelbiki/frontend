import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function AdminNavBar() {
	const navigate = useNavigate();
	const { user } = JSON.parse(localStorage.getItem("auth"));

	const handleLogout = () => {
		localStorage.removeItem("auth");
		navigate('/login/');
	};
	return (
		<Navbar bg="primary" variant="dark">
		 	<Container>
				<Navbar.Brand className="fw-bold" href="/admin">Dicha Deli</Navbar.Brand>
				<Nav>
					<Navbar.Collapse className="justify-content-end">
					<Nav.Item>
						<Nav.Link href="/admin/createshop">Create Shop</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/admin/listshop">List Shop</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/admin">admin Active 2</Nav.Link>
					</Nav.Item>
						<NavDropdown title={user.username}>
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
export default AdminNavBar;