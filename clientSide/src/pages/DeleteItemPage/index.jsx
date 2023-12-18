import { useEffect, useState } from 'react';
import "./index.css"
import { InputField } from '../../components';
import AlertComponent from '../../components/AlertComponent';
const DeleteItemPage = () => {
    const [itemId, setItemId] = useState('');
    const [showAlert, setShowAlert] = useState(false); 
    const [alertText,setAlertText]=useState("")
    const [typeOfAlert,setTypeOfAlert]=useState("")


    useEffect(()=>{
        setShowAlert(true)
    },[showAlert])

    const handleCreateItem = async () => {
       
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/item/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: 'login',
                },
            });
            console.log(response.success||response.status===200)
            if (response.success) {
                
                setAlertText("Item Deleted Successfully") 
                setTypeOfAlert("notify")
             
            }else{ 

                setTypeOfAlert("warning")
                setAlertText(response.statusText)
                setShowAlert(true)
            }
            console.log("yes : ",response.status )
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
        {showAlert && <AlertComponent alertText={alertText} isAlertShown={true} typeOfAlert={typeOfAlert} />}
            <div className="create-page">
            <form>
            <h2>Delete Item </h2>
            <InputField
                    label="Item Id set to Delete:"
                    type="text"
                    id="item_id"
                    name="item_id"
                    value={itemId}
                    onChange={(e) => setItemId(e.target.value)}
                    required
                    minLength={3}
                />

                <button type="button" className='delete-button' onClick={handleCreateItem}>
                    Delet Item
                </button>

            </form>
        </div>
        </div>
    );
};

export default DeleteItemPage;
