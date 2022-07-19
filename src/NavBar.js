import React from 'react';
import { 
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

import Home from "./Home";
import Find from "./Find";
import AllDrinks from "./AllDrinks";
import About from "./About";
import Contact from "./Contact";

import "./css/navbar.css"

const NavBar = () => {
	return (
		<Router>
				<div>
					<div>
						<ul className="header">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/find">Find a Drink</Link></li>
							<li><Link to="/all">All Drinks</Link></li>
							<li><Link to="/about">About this project</Link></li>
							<li><Link to="/contact">Contact Me</Link></li>
						</ul>
					</div>
					<div className = "content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/find" element={<Find />} />
							<Route path="/all" element={<AllDrinks />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</div>
			</Router>
	);
};

export default NavBar;