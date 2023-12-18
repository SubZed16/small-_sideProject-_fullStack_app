import { useEffect, useState } from 'react';
import "./index.css"
import { InputField } from '../../components';
import AlertComponent from '../../components/AlertComponent';
const CreatePage = () => {
    const [formValues, setFormValues] = useState({
        itemName: '',
        itemQuantity: 0,
        pricePerItem: 0,
        description: '',
        totalPrice: 0,
        weight: 0,
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
            item_name: formValues.itemName,
            item_quantity: formValues.itemQuantity,
            price_per_item: formValues.pricePerItem,
            description: formValues.description,
            total_price: formValues.itemQuantity*formValues.pricePerItem,
            weight: formValues.weight,

        };
     
        try {
            const response = await fetch('http://127.0.0.1:5000/api/item/', {
                method: 'POST',
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
            <h2>Create Item Page </h2>
            <InputField
                    label="Item Name:"
                    type="text"
                    id="itemName"
                    name="itemName"
                    value={formValues.itemName}
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

                <InputField
                    label="Price per Item: (TND*)"
                    type="number"
                    id="pricePerItem"
                    name="pricePerItem"
                    value={formValues.pricePerItem}
                    onChange={handleInputChange}
                />

                <InputField
                    label="Description:"
                    type="text"
                    id="description"
                    name="description"
                    value={formValues.description}
                    onChange={handleInputChange}
                />
                
                <InputField
                    label="Weight: (Kg*)"
                    type="number"
                    id="weight"
                    name="weight"
                    value={formValues.weight}
                    onChange={handleInputChange}
                />

                <button type="button" className='create-button' onClick={handleCreateItem}>
                    Create Item
                </button>

            </form>
        </div>
        </div>
    );
};

export default CreatePage;
