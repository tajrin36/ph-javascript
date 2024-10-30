import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid pink',
        padding: '15px',
        borderRadius: '20px',
        marginBottom: '10px',
    }

    const handleViewDetails = () => {
        navigate(`/post/${ id}`);
    }
    return (
        <div style={postStyle}>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <Link to={`/post/${ id}`}>Post details</Link>
            <br />
            <button onClick={handleViewDetails}>view details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post;