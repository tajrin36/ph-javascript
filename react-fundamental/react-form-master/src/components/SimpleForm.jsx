const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log("submitted");
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    placeholder="Type here"
                    name="name"
                    className="input input-bordered input-secondary w-full max-w-xs" />
                <input
                    type="email"
                    placeholder="Type here"
                    name="email"
                    className="input input-bordered input-secondary w-full max-w-xs" />
                <br />
                <input value="submit" type="submit" className="btn" />
            </form>
        </div>
    );
};

export default SimpleForm;