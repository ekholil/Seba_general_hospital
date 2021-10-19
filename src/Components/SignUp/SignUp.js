import React, { useState } from 'react';
import { AiOutlineUser, AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';


const SignUp = () => {
    const {signUpWithEmail, signInUsingGoogle} = UseAuth()
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    return (
        <div className="  flex justify-center items-center">
            <div className="md:w-1/3 sm:w-10/12 bg-green-100 p-3 rounded my-3">
                <AiOutlineUser className="mb-2 block text-7xl border-green-200 border-2 text-green-500 rounded-full p-7 box-content mx-auto" />
                <h2 className="text-center">Please Sign Up</h2>
                <div>
                <label className="text-lg" htmlFor="">Your Email : </label>
                <input onChange={handleEmail} className="border block p-2 mb-2  w-full" type="email" placeholder="Enter Your Email" required/>
                </div>

                <div>
                <label className="text-lg" htmlFor="">Password : </label>
                <input onChange={handlePassword} className="border block mb-2 p-2 w-full" type="password" placeholder="Enter Your Password" required/>
                </div>
               

                <input className="bg-green-400 block p-2 w-full" type="button" onClick={() => signUpWithEmail(email, password)} value="Sign up" required/>


                <p className="text-center text-lg mt-2">Already Have an account? <Link to="/login">Login</Link> Or </p>
                <div className="flex items-center justify-center border-2 border-green-400 p-1">
                <button onClick={signInUsingGoogle} className=""> <AiFillGoogleCircle className="inline text-2xl" />  Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;