import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css'; // assuming the CSS is in ItemDetail.css

const ItemDetail = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/item/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Cookie: 'login',
                    },
                });
                const res = await response.json();
                const {respond}=res
                console.log(respond)
                setItem(respond);
            } catch (error) {
                console.error(error);
            }
        };

        fetchItem();
    }, [id]);

    if (!item) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
    }

    return (
       <div>
        <h2>Item Details</h2>
         <div className="item-detail">
            <h2>{item.item_name}</h2>
            <p>Item Id: {item._id}</p>
            <p>Quantity: {item.item_quantity}</p>
            <p>Price per Item: {item.price_per_item}</p>
            <p>Description: {item.description}</p>
            <p>Total Price: {item.total_price}</p>
            <p>Weight: {item.weight}</p>
        </div>
       </div>
    );
};

export default ItemDetail;