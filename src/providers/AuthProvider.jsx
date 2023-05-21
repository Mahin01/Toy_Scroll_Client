
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../configs/firebase.config";
import { createContext, useState } from "react";

 export const AuthContext = createContext();

const auth = getAuth(app);

const Auth = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user, 
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;