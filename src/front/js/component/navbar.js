import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{store.auth ?
						<Link to="/login">
							<button className="btn btn-primary" onClick={ 
							()=>actions.logout()
							}>Logout</button>
						</Link>
						:
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
					}
				</div>
			</div>
		</nav>
	);
};
