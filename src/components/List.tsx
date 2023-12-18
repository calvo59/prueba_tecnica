import React from "react";

interface ItemListProps {
  items: any[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul>
      {/* I think the user would appreciate seeing something if there are no results */}
      {items.length === 0 && <li>No pokemon found</li>}
      {/* It would be nice to have a loading indicator here, but I don't think it's necessary for this exercise.
      What if the network request fails? It would be nice to show an error message to the user. */}
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemList;
