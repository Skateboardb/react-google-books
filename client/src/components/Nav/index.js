import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';


function Navs() {
	return (
		// <Navbar bg="dark" expand="lg">
		// 	<Navbar.Brand href="/">Google Books</Navbar.Brand>
		// 	<Link to="/">Search</Link>
		// 	<Link to="/saved">Saved</Link>
		// </Navbar>

		<Navbar  expand="lg" id="navbar">
			<Navbar.Brand href="/" id="brand">Branford's Books</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/" >Search</Nav.Link>
					<Nav.Link href="/saved">Saved</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navs;
