//FILEPATH: /e:/small side projects/small fullstack app/clientSide/src/components/AlertComponent/index.html -->
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import './index.css';

function AlertComponent({alertText,typeOfAlert,isAlertShown}) {
    const [showAlert, setShowAlert] = useState(isAlertShown);
    const [className, setClassName] = useState("");
    useEffect(() => {
        if(typeOfAlert==="warning"){
            setClassName("error")
        } else if(typeOfAlert==="notify"){
            setClassName("valid")
        } else {
            setClassName("light-blue")
        }
    }, [typeOfAlert]);
    
    const handleClose = () => {
        setShowAlert(false);
    };

    const handleShow = () => {
        setShowAlert(true);
    };
    console.log({alertText})
    return (
        showAlert ? (
            <div className="alert-container">
                <div className={`alert-message ${className}`}>{alertText}</div>
                <button className="alert-close" onClick={handleClose}>
                    &times;
                </button>
            </div>
        ) : (
            <button className="alert-show" onClick={handleShow}>
                Show Alert
            </button>
        )
    );
}

AlertComponent.propTypes = {
    alertText: propTypes.string.isRequired,
    typeOfAlert: propTypes.string,
    isAlertShown: propTypes.bool
};
export default AlertComponent;
