import React from "react"
import {NavDropdown} from "react-bootstrap";
import './Home.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
	return (

		<header className="header">
		<a href="#" className="logo">GYM</a>
		<nav className="navbar">
			<a href="#" className="active">Home</a>
			<a href="#">Contact</a>
			<a href="#">Membership</a>
			<a href="#">Shop</a>
			<a href="#">About</a>
			<a href="#">Book A Free Trial</a>
			<NavDropdown title="LogOut" id="basic-nav-dropdown">
		<NavDropdown.Item href="/">LogOut</NavDropdown.Item>

	</NavDropdown>
		</nav>
	</header>
   
		
	)
}
export default Header;

