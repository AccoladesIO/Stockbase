import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../src/firebase'
import { NavLink, useNavigate } from 'react-router-dom'
import './assets/Styles.scss'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const [password, setPassword] = useState('');
       
    const onLogin = (e: React.FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/dashboard")
            alert(`${user.email} is signed in`)
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode)
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main className='main'>        
                <section className='section'>
                    <div>                                            
                        <h3 className='heading-sub'> <img src='../src/assets/logo.svg' alt="" />  Login to Stockbase </h3>                       
                                                       
                        <form className='form-control'>
                            
                            <div className='indent'>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div  className='indent'>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div className='indent'>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>          
                            <p className="error">
                                {error}
                                </p>                                                                   
                        </form>
                       
                        <p className="text-sm color">
                            No account yet?
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>

                        <hr />

                        <p className='text-sm color'>
                        Open-source project...
                        <a href='https://github.com/accoladesio' >
                        View repo
                        </a>
                    </p>                   

                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login