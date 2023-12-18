import PropTypes from 'prop-types';

const InputField = ({ label, type, id, name, value, onChange, required, min, minLength }) => {
    return (
        <div style={{display:"flex",justifyContent:"space-between",width:"27rem"}}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                min={min}
                minLength={minLength}
            />
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    min: PropTypes.number,
    minLength: PropTypes.number,
};
export default InputField;
