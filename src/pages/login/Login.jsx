import React, { useState } from 'react';
import styles from './login.module.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className={styles.example}>
			<div className={styles.container}>
				<div className={styles.form}>
					<form action="#">
						<label htmlFor="Primary_email">Primary Email</label>
						<br />
						<input type="email" placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
						<br />
						<label htmlFor="Password">Password</label>
						<br />
						<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
						<br />
						<button className={styles.login} onClick={() => {}}>Log-in</button>
						<br />
						<a href="#" style={{color: "#1f2024", padding: "3px auto"}}>Forgot Password?</a> {/* modify link to enable password reset mechanism */}
						<div className={styles.or}>
							<hr />
							<p style={{ position: "relative", top: "-18px", verticalAlign: "middle" }}>or</p>
							<hr />
						</div>
						<button className={styles.google_login} onClick={() => {}}> <FcGoogle />  Continue With Google </button>
					</form>
					<Link to="/Register" className={styles.registerLink} style={{color: "#1f2024"}}>Don't have an account? <br /> Register Here</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;