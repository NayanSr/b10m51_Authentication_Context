/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const name= 'Nayan'
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signoutUser =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            console.log('Current User :', currentUser);
                setUser(currentUser);
            })

            return ()=>{
                unsubscribe();
            }
    },[])

    

    const authInfo = {
        name,
        user,
        createUser,
        signinUser,
        signoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;