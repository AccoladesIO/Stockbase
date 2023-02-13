import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../src/firebase';

 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main className='main'>        
        <section className='section'>
            <div>
                <div>                  
                    <h3 className='heading-sub'><img src='../src/assets/logo.svg' alt="" /> Sign up to StockBase </h3>                                                                            
                    <form className='form-control'>                                                                                            
                        <div className='indent'>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div className='indent'>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <div className="indent">
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                        </div>
                                                                     
                    </form>
                   
                    <p className='text-sm color'>
                        Already have an account?
                        <NavLink to="/login" >
                            Sign in
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
            </div>
        </section>
    </main>
  )
}
 
export default Signup