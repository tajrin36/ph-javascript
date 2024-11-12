import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [success, setSuccess] = useState(false);

    const [loginError, setLoginError] = useState('');

    const emailRef = useRef();

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        setSuccess(false);
        setLoginError('');

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user);

                if (!result.user.emailVerified) {
                    setLoginError('Please verify your Email address!')
                } else {
                    setSuccess(true);
                }

                // ...
            })
            .catch((error) => {
                console.log('ERROR', error.message);
                setLoginError(error.message);
            });
    }

    const handleForgotPassword = () => {
        console.log('get me Email address!', emailRef.current.value);
        const email = emailRef.current.value;

        if (!email) {
            console.log('Please provide a valid Email address!');
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password reset email sent!')
                })
                .catch((error) => {
                    console.log('ERROR',error.message);
                });
        }
    }
    return (
        <div className="flex items-center justify-center mt-4">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border">
                <form onSubmit={handleLogin} className="card-body bg-[#fff8f9]">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required autoComplete="off" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label onClick={handleForgotPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                </form>
                {
                    success && <p className="text-green-500 text-center text-lg font-semibold">User successfully login</p>
                }
                {
                    loginError && <p className="text-red-500 text-center text-lg font-semibold">{loginError}</p>
                }

                <p className="text-black text-lg p-4 text-center font-semibold">New to this website please <Link to='/signup'><span className="text-blue-500">Sign Up</span></Link></p>
            </div>
        </div>
    );
};

export default Login;