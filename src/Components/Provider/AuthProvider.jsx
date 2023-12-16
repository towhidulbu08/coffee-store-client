/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext=createContext(null);

const auth=getAuth(app)


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo={
        user,
        createUser,
        signInUser,
        loading}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;