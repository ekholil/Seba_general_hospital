import initializeAuth from "../Firebase/firebase-init"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signInWithEmailAndPassword, updateProfile,  signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const Usefirebase = () => {
    const [user, setuser] = useState({})
    const [error, setError] = useState('')
    initializeAuth()
    const auth = getAuth()
    
    const signUpWithEmail = (name, email, password) => {
        console.log(typeof email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            setuser(user)
            updateProfile(auth.currentUser, {displayName: name})
            .then((result) => {
                console.log(result)
                window.location.reload()
                setError('')
            })
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
            setError('')
            console.log(user)
        })
        .catch((err) => {
            setError(err)
            console.log(error)
        })
    }
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        
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
    return {signUpWithEmail, user, signInUsingGoogle, signInUsingEmail, logOut, error}
}

export default Usefirebase;