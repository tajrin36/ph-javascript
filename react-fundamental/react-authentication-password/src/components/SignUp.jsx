import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState([]);

    const [success, setSuccess] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        console.log(email, password, terms);

        setErrorMessage('');
        setSuccess(false);

        if (!terms) {
            setErrorMessage('please accept our terms and conditions');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('password should be 6 character or longer');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('At least one upperCase,one lowerCase,one special character');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed up 
                console.log(result.user);
                setSuccess(true);

                //send verification email address
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('Email verification sent!');
                        
                    });

                    //update user profile name and photo url
                    const profile = {
                        displayName:name,
                        photoURL:photo,
                    }
                    updateProfile(auth.currentUser,profile)
                    .then(()=>  {
                        console.log('User profile updated!')
                    }) .catch((error) =>  {
                        console.log('ERROR',error.message);
                    })
            })
            .catch((error) => {
                console.log('ERROR', error);
                setErrorMessage(error.message);
                setSuccess(false);
                // ..
            });
    }
    return (
        <div className="flex items-center justify-center mt-4 ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border ">
                <form onSubmit={handleSignUp} className="card-body bg-[#fff8f9] rounded-lg">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required autoComplete="off" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required autoComplete="off" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required autoComplete="off" />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                            className="input input-bordered" required />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-sm absolute right-3 top-11 bg-white">
                            {
                                showPassword ? <FaEyeSlash /> : <IoEyeSharp />
                            }
                        </button>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-3">
                            <input type="checkbox" name="terms" className="checkbox" />
                            <span className="label-text">Accept our temrs and conditions</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Sign Up</button>
                    </div>
                </form>
                {
                    errorMessage && <p className="text-red-500  text-center">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-600 text-center">successfully sign up!</p>
                }
                <p className="text-black text-lg p-4 text-center font-semibold">Already have an account? Please <Link to='/login'><span className="text-blue-500">LogIn</span></Link></p>
            </div>
        </div>
    );
};

export default SignUp;