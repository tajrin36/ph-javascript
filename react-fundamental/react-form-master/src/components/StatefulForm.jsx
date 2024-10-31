import { useState } from "react";

const StatefulForm = () => {

    const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);

    const [name, setName] = useState(null);

    const [error,setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('password must be longer');
        }else{
            setError('');
        }
        console.log(name);
        console.log(email);
        console.log(password);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
        // console.log(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    return (
        <div className="border p-5 text-center mt-5 rounded-xl">
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3"
                    autoComplete="off" />
                    <br />
                <input
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3"
                    autoComplete="off" />
                    <br />
                <input
                    onChange={handlePasswordChange}
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3"
                    autoComplete="off"
                    required />
                <br />
                <input value="submit" type="submit" className="btn bg-[#cc99cc]" />
                {
                    error && <p className="text-red-600 text-lg font-medium">{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;