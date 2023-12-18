import React from 'react';

interface ItemListProps {
  items: any[]; 
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li> 
      ))}
    </ul>
  );
};


export default ItemList;
