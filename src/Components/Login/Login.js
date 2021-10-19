import React, { useState } from 'react';
import {AiOutlineUser, AiFillGoogleCircle} from 'react-icons/ai'
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
    const {signInUsingGoogle, signInUsingEmail, error} = UseAuth()
    const location = useLocation()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
           history.push(redirect_uri)
        })
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    return (
        <div className="flex justify-center items-center mb-3">
            <div className="md:w-1/3 sm:w-10/12 mt-3 bg-green-100 p-4 rounded">
                <AiOutlineUser className="mb-4 block text-7xl border-green-200 border-2 text-green-500 rounded-full p-7 box-content mx-auto" />
                <h2 className="text-center">Please Log in</h2>
                <div>
                <label className="text-lg" htmlFor="">Your Email : </label>
                <input onChange={handleEmail} className="border block p-2 mb-3  w-full" type="text" placeholder="Enter Your Email" />
                </div>

                <div>
                <label className="text-lg" htmlFor="">Your Email : </label>
                <input onChange={handlePassword} className="border block mb-3 p-2 w-full" type="password" placeholder="Enter Your Password" />
                </div>
                <p className="text-red-600">{error}</p>
                <input onClick={() => signInUsingEmail(email, password)} className="bg-green-400 block p-2 w-full" type="button" placeholder="Enter Your Password" value="Log in"/>
                <p className="text-center text-lg mt-2">Don't Have an account? <Link to="/signup">Sign up</Link> Or</p>
                <div className="flex items-center justify-center border-2 border-green-400 p-1">
                <button onClick={handleGoogleLogin} className=""> <AiFillGoogleCircle className="inline text-2xl" />  Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;