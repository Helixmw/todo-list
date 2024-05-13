import ListItem from './ListItem'
import { Stack } from '@mui/material';
import { useState } from 'react';

const ItemsList = () => {

    const [items, setItems] = useState([
        {
            title:"Buy milk",
            created: new Date().toLocaleDateString()
        },
        {
            title:"Take kids to school",
            created: new Date().toLocaleDateString()
        },
        {
            title:"Finish writing my book",
            created: new Date().toLocaleDateString()
        },
    ])
    
    const RemoveItem = (item) => {
        let newItems = items.filter((itm) => itm !== item);
        setItems(newItems)
    }
    return ( <div className="items">
        <Stack spacing={1}>
        {items && items.reverse().map((item) => (
            <ListItem title={item.title} created={item.created} removeItem={() => RemoveItem(item)} />
        ))
        }    
        
        </Stack>
    </div> );
}
 
export default ItemsList;