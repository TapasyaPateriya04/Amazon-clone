import axios from 'axios'
import React, { useState } from 'react'
import './SignIn.css'

function SignIn() {
	const [userName,setUserName] = useState('')
	const [password,setPassword] = useState('')

	function sign_in_handler(e){
		e.preventDefault()
		// backend call to re route
		console.log(userName,password)
		const url = 'http://localhost:8000/api/v1/signin'
		const payload = {
			userName: userName,
			password: password
		}
		axios.post(url, payload)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	return (
		<div className='sign_in'>
			<h2>Sign In</h2>
			<form action="">
				<div id="sign_in_form">
					<label htmlFor="username">email</label>	
					<input type="text" id="username" onChange={(e) => 
						setUserName(e.target.value)}/>

					<label htmlFor="password">password</label>	
					<input type="password" id="password" onChange={(e) => 
						setPassword(e.target.value)}/>

					<button onClick={ (e) => sign_in_handler(e)}>sign in</button>
				</div>
			</form>	
			
		</div>
	)
}

export default SignIn