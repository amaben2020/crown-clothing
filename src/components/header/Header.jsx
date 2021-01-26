import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import "./header.styles.css";
const Header = () => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<img className="logo" src={Logo} />
			</Link>
			<div className="options">
				<Link className="option" to="/">
					SHOP
				</Link>
				<Link className="option" to="/">
					CONTACT
				</Link>
			</div>
		</div>
	);
};

export default Header;
