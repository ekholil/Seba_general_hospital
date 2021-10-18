import React from 'react';
import {AiOutlineUser, AiFillGoogleCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Usefirebase from '../../Hooks/useFirebase';
const Login = () => {
    const {signInUsingGoogle} = Usefirebase()
    return (
        <div className="flex justify-center items-center">
            <div className="md:w-1/3 sm:w-10/12 mt-3 bg-green-100 p-4 rounded">
                <AiOutlineUser className="mb-4 block text-7xl border-green-200 border-2 text-green-500 rounded-full p-7 box-content mx-auto" />
                <div>
                <label className="text-lg" htmlFor="">Your Email : </label>
                <input className="border block p-2 mb-3  w-full" type="text" placeholder="Enter Your Email" />
                </div>

                <div>
                <label className="text-lg" htmlFor="">Your Email : </label>
                <input className="border block mb-3 p-2 w-full" type="password" placeholder="Enter Your Password" />
                </div>
                <input className="bg-green-400 block p-2 w-full" type="button" placeholder="Enter Your Password" value="Log in"/>
                <p className="text-center text-lg mt-2">Don't Have an account? <Link to="/signup">Sign up</Link> Or</p>
                <div className="flex items-center justify-center border-2 border-green-400 p-1">
                <button onClick={signInUsingGoogle} className=""> <AiFillGoogleCircle className="inline text-2xl" />  Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;