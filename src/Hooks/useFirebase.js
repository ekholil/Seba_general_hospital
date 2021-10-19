import initializeAuth from "../Firebase/firebase-init"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signInWithEmailAndPassword,  signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const Usefirebase = () => {
    const [user, setuser] = useState({})
    const [error, setError] = useState('')
    initializeAuth()
    const auth = getAuth()
    const signUpWithEmail = (email, password) => {
        console.log(typeof email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            setuser(user)
            console.log(user)
        })
        .catch((err) => {
            setError(err)
            console.log(error)
        })
        
    }
    const signInUsingEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            setuser(user)
            console.log(user)
        })
        .catch((err) => {
            setError(err)
            console.log(error)
        })
    }
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user
            setuser(user)
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setuser(user)
            }
        })
    }, [])
    const logOut = () => {
        signOut(auth).then(() => {
            setuser({})
          }).catch((error) => {
            // An error happened.
          });
    }
    return {signUpWithEmail, user, signInUsingGoogle, signInUsingEmail, logOut}
}

export default Usefirebase;