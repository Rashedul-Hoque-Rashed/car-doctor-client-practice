import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import PropTypes from "prop-types"

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);

const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
};

const login = (email,pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,pass);
};

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });
    return () => unsubscribe();
},[])


    const authInfo={
        user,
        loading,
        createUser,
        login
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;