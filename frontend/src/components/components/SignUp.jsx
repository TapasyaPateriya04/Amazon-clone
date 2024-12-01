import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

function SignUp(props) {
	const [userName,setUserName] = useState('')
	const [password,setPassword] = useState('')
	const [confirmPassword,setConfirmPassword] = useState('')
	const [errorMessage,setErrorMessage] = useState('')
	let setIsLoggedIn = props.setIsLoggedIn
	let navigate = useNavigate()

	function sign_up_handler(e){
		try 
		{ 
			e.preventDefault() // prevent page reload
			// backend call to re route
			console.log(userName,password,confirmPassword)
			if (password !== confirmPassword) {
				throw Error('password and confirm password do not match..')
			}
			setErrorMessage('');
			const url = 'http://localhost:8001/api/v1/signin'
			const payload = {
				userName: userName,
				password: password
			}
			axios.post(url, payload)
					 .then(function (response) {
						console.log(response);
						if (response.status === 200){
							// Home
							setIsLoggedIn(true);
							navigate('/signIn')
						}
			})
				   .catch(function (error) {
						console.log(error);
			});
		}
		catch(e){
			console.log(e.message);
			setErrorMessage(e.message);
		}
	}
	return (
		<div className='sign_up'>
			<h2>Sign Up</h2>
			<form action="">
				<div id="sign_in_form">
					<label htmlFor="username">email</label>	
					<input type="text" id="username" onChange={(e) => 
						setUserName(e.target.value)}/>

					<label htmlFor="password">password</label>	
					<input type="password" id="password" onChange={(e) => 
						setPassword(e.target.value)}/>
					
					<label htmlFor="confirm_password"> confirm password</label>	
					<input type="password" id="confirm_password" onChange={(e) => 
						setConfirmPassword(e.target.value)}/>

					<p className="error_message">{errorMessage}</p>

					<button onClick={ (e) => sign_up_handler(e)}>sign up</button>
				</div>
			</form>	
			
		</div>
	)
}

export default SignUp