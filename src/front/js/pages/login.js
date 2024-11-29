import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
export const Login = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate= useNavigate()
    const loguear = async(e)=>{
		e.preventDefault()
		let loginUsuario={
			name:name,
			email:email,
			password:password
		}
		let resp = await actions.login(loginUsuario)
		if(resp){
			navigate("/demo")
		} else {
			alert ("Algo salió mal")
		}

	}
	return (
		<div className="text-center mt-5 container w-50 bg-light">
			<h1>Login</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
					<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
				</div>
				<button type="button" onClick={(e)=>loguear(e)} className="btn btn-primary">Login</button>
			</form>
		</div>
	);
};
   