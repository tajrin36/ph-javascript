import PropTypes from 'prop-types';


const Link = ({ route }) => {
    const { id, name, path } = route;
    return (
        <div >
            <li className="mr-5"><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route:PropTypes.object.isRequired,
}

export default Link;