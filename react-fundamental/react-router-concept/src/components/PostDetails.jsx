import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;

    const navigate = useNavigate();

    const handleGoBackToPost = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2>post details about: {id} </h2>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBackToPost}>Go back</button>
        </div>
    );
};

export default PostDetails;