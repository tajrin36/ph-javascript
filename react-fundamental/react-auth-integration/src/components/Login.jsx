import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const navigate = useNavigate();

    const {signInUser} = useContext(AuthContext);

    const handleLogin = event =>  {

        event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then((result)=>  {
            console.log(result.user);
            event.target.reset();
            navigate('/');
        })
        .catch(error =>  {
            console.log('ERROR',error.message);
        })

    }
    return (
        <div className="flex flex-col items-center justify-center mt-6">
            <h2 className="text-3xl font-semibold my-5">Log In</h2>
            <div className="card w-full max-w-sm shrink-0 border bg-gray-100 ">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required autoComplete="off"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-lg font-medium">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Login</button>
                    </div>
                </form>
                <p className="text-lg font-medium p-5">Have no account?Please,<Link to='/register'><span className="text-accent"> Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;