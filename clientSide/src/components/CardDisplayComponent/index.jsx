import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import './index.css'; // assuming the CSS is in index.css

const CardDisplayComponent = ({ items }) => {
    return (
        <div className="card-display-component">
            <h2>List of Items:</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                       <Link to={`/dashboard/item/${item._id}`}> <h3>{item.item_name} : {item.item_quantity}</h3></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

CardDisplayComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            item_name: PropTypes.string.isRequired,
            item_quantity: PropTypes.number.isRequired
        })
    ).isRequired
};

export default CardDisplayComponent;