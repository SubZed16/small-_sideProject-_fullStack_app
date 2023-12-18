import PropTypes from 'prop-types';
import './index.css'; // assuming the CSS is in index.css
const InputComponent = ({ label, value, onChange,type, placeholder }) => {
    return (
        <div>
            <label className='input-component-label' >{label}</label>
            <input className="input-component" placeholder={placeholder} type={type} value={value} onChange={onChange} />
        </div>
    );
};

InputComponent.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default InputComponent;
