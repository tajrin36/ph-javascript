import { useEffect, useRef, useState } from "react";

const RefForm = () => {

    const [error,setError] = useState('');

    const [password, setPassword] = useState(null);

    const nameRef = useRef(null);

    const emailRef = useRef(null);

    const passwordRef = useRef(null);

    useEffect(()=>  {
        nameRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('password must be longer');
        }else{
            setError('');
        }
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div className="border p-5 text-center mt-5 rounded-xl">
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    ref={nameRef}
                    type="text"
                    placeholder="Type name"
                    name="name"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3"
                    autoComplete="off" />
                <br />
                <input
                    ref={emailRef}
                    type="email"
                    placeholder="Type email"
                    name="email"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3"
                    autoComplete="off" />
                <br />
                <input
                    ref={passwordRef}
                    onChange={handlePasswordChange}
                    type="password"
                    placeholder="Type password"
                    name="password"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3"
                    autoComplete="off"
                    required/>
                <br />
                <input value="submit" type="submit" className="btn bg-[#cc99cc]" />
                {
                    error && <p className="text-red-600 text-lg font-medium">{error}</p>
                }
            </form>
        </div>
    );
};

export default RefForm;