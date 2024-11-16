/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const[loading, setLoading]= useState(true);
    const name= 'Nayan'
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const signinUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            console.log('Current User :', currentUser);
                setUser(currentUser);
                setLoading(false)
            })

            return ()=>{
                unsubscribe();
            }
    },[])

    

    const authInfo = {
        name,
        user,
        loading,
        createUser,
        signinUser,
       signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;