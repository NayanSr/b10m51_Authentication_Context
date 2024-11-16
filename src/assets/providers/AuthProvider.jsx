/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const name= 'Nayan'
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        name,
        createUser,
        signinUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;