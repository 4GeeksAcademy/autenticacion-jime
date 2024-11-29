import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const agregar = async(e)=>{
		e.preventDefault()
		let nuevoUsuario={
			name:name,
			email:email,
			password:password
		}
		let resp = await actions.signUp(nuevoUsuario)
	}
	return (
		<div className="text-center mt-5 container w-50 bg-light">
			<h1>Sign up</h1>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Name</label>
					<input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Password</label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
				</div>
				<button type="button" onClick={(e)=>agregar(e)} class="btn btn-primary">Sign up</button>
			</form>
		</div>
	);
};
