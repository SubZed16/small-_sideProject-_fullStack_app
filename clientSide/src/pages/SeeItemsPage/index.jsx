import { CardDisplayComponent } from "../../components";
import { useState, useEffect } from 'react';

const SeeListOfItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/item/getall', {
                    headers: {
                        'Cookie': 'login'
                    }
                });
                const result = await response.json();
                console.log(result.respond.data)
                setItems(result.respond.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (<CardDisplayComponent items={items} />);
}
export default SeeListOfItems;