import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../configs/firebaseConfig';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

     // observe auth state change
     useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProviders;