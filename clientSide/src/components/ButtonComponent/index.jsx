
import PropTypes from 'prop-types';
import './index.css'; // assuming the CSS is in index.css

const ButtonComponent = ({ onClick, text }) => {
  return (
    <button className="button-component"  onClick={onClick}>{text}</button>
  );
};

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonComponent;
