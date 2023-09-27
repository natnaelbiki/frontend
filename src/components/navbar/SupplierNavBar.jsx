import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function SupplierNavBar() {
	const navigate = useNavigate();
	const { user } = JSON.parse(localStorage.getItem("auth"));

	const handleLogout = () => {
		localStorage.removeItem("auth");
		navigate('/login/');
	};
	return (
		<Navbar bg="primary" variant="dark">
		 	<Container>
				<Navbar.Brand className="fw-bold" href="/supplier">Dicha Deli</Navbar.Brand>
				<Nav>
				<Navbar.Collapse className="justify-content-end">
				<NavDropdown title="Shop">
					<NavDropdown.Item href="/supplier/listshop">List Shop</NavDropdown.Item>
					<NavDropdown.Item href="/supplier/createshop">Create Shop</NavDropdown.Item>
				</NavDropdown>
				<NavDropdown title="Product">
					<NavDropdown.Item href="/supplier/listproduct">List Product</NavDropdown.Item>
					<NavDropdown.Item href="/supplier/listshop">Create Product</NavDropdown.Item>
				</NavDropdown>	
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
export default SupplierNavBar;