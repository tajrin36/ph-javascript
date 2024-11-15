import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const navigate = useNavigate();

    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>  {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,email,password);

        createUser(email,password)
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
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required autoComplete="off" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required autoComplete="off" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-lg font-medium">Register</button>
                    </div>
                </form>
                <p className="text-lg font-medium p-5">Already have an account.Please,<Link to='/login'><span className="text-accent"> Log In</span></Link></p>
            </div>
        </div>
    );
};

export default Register;