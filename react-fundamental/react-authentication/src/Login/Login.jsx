import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            }).catch((error) => {
                console.log('Error', error);
                setUser(null);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth,githubProvider)
        .then((result)=>  {
            setUser(result.user);
        }).catch((error)=>  {
            console.log('ERROR',error);
            setUser(null);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out done!');
                setUser(null);
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            {/* <button onClick={handleGoogleSignIn} className="btn btn-success text-white text-2xl font-medium">Login With Google</button>
            <button onClick={handleSignOut} className=" ml-3 btn btn-success text-white text-2xl font-medium">Sign Out</button> */}
            {
                user ? <button onClick={handleSignOut} className=" ml-3 btn btn-success text-white text-2xl font-medium">Sign Out</button> :
                    <>
                        <button onClick={handleGoogleSignIn} className="btn btn-success text-white text-2xl font-medium">Login With Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-success text-white text-2xl font-medium">Login With Github</button>
                    </>

            }
            {
                user &&
                <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;