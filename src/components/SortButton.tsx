import React from 'react';

interface SortButtonProps {
  onSort: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ onSort }) => {
  return (
    <button onClick={onSort}>
        Ordenar alfabéticamente    
    </button>
  );
};

export default SortButton;
