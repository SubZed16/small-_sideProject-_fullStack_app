import { useEffect, useState } from 'react';
import "./index.css"
import { InputField } from '../../components';
import AlertComponent from '../../components/AlertComponent';
const PatchPage = () => {
    const [formValues, setFormValues] = useState({
        item_id: '',
        itemQuantity: 0,
        pricePerItem: 0,
});
    const [showAlert, setShowAlert] = useState(false); 
    const [alertText,setAlertText]=useState("")
    const [typeOfAlert,setTypeOfAlert]=useState("")
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    useEffect(()=>{
        setShowAlert(true)
    },[showAlert])

    const handleCreateItem = async () => {
        setShowAlert(true)
        const item = {
            item_quantity: formValues.itemQuantity,
            price_per_item: formValues.pricePerItem,

        };
     
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/item/${formValues.item_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: 'login',
                },
                body: JSON.stringify(item),
            });

            if (response&&response.status===201) {
                setAlertText("Item Created Successfully") 
                setTypeOfAlert("notify")
             
            }
            if(response.status===400){
                setTypeOfAlert("warning")
                setAlertText(response.statusText)
                setShowAlert(true)
            }
            console.log("yes : ",response.status )
        } catch (error) {
            console.error(error);
        }
    };
    console.log({alertText,typeOfAlert,showAlert})

    return (
        <div>
        {showAlert && <AlertComponent alertText={alertText} isAlertShown={true} typeOfAlert={typeOfAlert} />}
            <div className="create-page">
            <form>
            <h2>Patch Item Page </h2>
            <InputField
                    label="Item's id set to patch:"
                    type="text"
                    id="item_id"
                    name="item_id"
                    value={formValues.item_id}
                    onChange={handleInputChange}
                    required
                    minLength={3}
                />

                <InputField
                    label="Item Quantity:"
                    type="number"
                    id="itemQuantity"
                    name="itemQuantity"
                    value={formValues.itemQuantity}
                    onChange={handleInputChange}
                    required
                    min={0}
                />

                <button type="button" className='patch-button' onClick={handleCreateItem}>
                    Edit Item infos
                </button>

            </form>
        </div>
        </div>
    );
};

export default PatchPage;
