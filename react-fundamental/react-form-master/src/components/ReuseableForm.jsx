const ReuseableForm = ({ formTitle,handleSubmit, submitBtnText ='Submit',children}) => {

    const handleLocalSubmit = e =>  {
        e.preventDefault();
        const data = {
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value,
        }
        handleSubmit(data);
    }
    
    return (
        <div className="border p-5 text-center mt-5 rounded-xl">
            {children}
            <form onSubmit={handleLocalSubmit} className="mt-4">
                <input
                    type="text"
                    placeholder="Type name"
                    name="name"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3" />
                <br />
                <input
                    type="email"
                    placeholder="Type email"
                    name="email"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3" />
                <br />
                <input
                    type="password"
                    placeholder="Type password"
                    name="password"
                    className="input input-bordered input-secondary w-full max-w-xs mb-3"
                    required />
                <br />
                <input value={submitBtnText} type="submit" className="btn bg-[#cc99cc]" />
            </form>
        </div>
    );
};

export default ReuseableForm;