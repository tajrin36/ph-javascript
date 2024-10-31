import useInputState from "../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('tajrin');

    const emailState = useInputState('tajrin@gmail.com');

    const handleSubmit = e => {
        // console.log('form data', name);
        console.log('form data',emailState.value);
        e.preventDefault();
    }
    return (
        <div className="border p-5 text-center mt-5 rounded-xl">
            <form onSubmit={handleSubmit} className="mt-4">
                {/* <input
                    value={name}
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Type name"
                    name="name"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3" />
                <br /> */}
                <input
                    {...  emailState}
                    type="email"
                    placeholder="Type email"
                    name="email"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3" />
                <br />
                <input
                    type="password"
                    placeholder="Type password"
                    name="password"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3" />
                <br />
                <input value="submit" type="submit" className="btn bg-[#cc99cc]" />
            </form>
        </div>
    );
};

export default HookForm;