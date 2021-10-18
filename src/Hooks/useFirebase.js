import initializeAuth from "../Firebase/firebase-init"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const Usefirebase = () => {
    const [user, setuser] = useState({})
    const [error, setError] = useState('')
    initializeAuth()
    const auth = getAuth()
    const signUpWithEmail = (name, email, password) => {
        console.log(name, typeof email, password)
        createUserWithEmailAndPassword(auth, name, email, password)
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
    return {signUpWithEmail, user, signInUsingGoogle, logOut}
}

export default Usefirebase;