import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, phone, username, email } = user;
    const userStyle = {
        border: '2px solid pink',
        padding: '15px',
        borderRadius: '20px',
        marginBottom: '10px',
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>User-name: {username}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${ id}`}>Show details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;