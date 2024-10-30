import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name} = userDetails;
    return (
        <div>
            <h2>Details about this user : {name}</h2>
        </div>
    );
};

export default UserDetails;