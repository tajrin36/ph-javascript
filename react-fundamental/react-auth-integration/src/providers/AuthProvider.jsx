import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null); 

    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>  {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password) =>  {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>  {
        setLoading(true);
        return signOut(auth)
    }

    // onAuthStateChanged(auth, currentUser =>  {
    //     if(currentUser){
    //         console.log('Currently logged user',currentUser);
    //         setUser(currentUser);
    //     } else{
    //         console.log('No user logged in!')
    //         setUser(null);
    //     }
    // })

    useEffect(()=>  {
        const unSubscribe = onAuthStateChanged(auth,currentUser =>  {
            console.log('Current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>  {
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;