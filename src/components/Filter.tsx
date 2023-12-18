import React from 'react';

interface FilterInputProps {
  onFilterChange: (filter: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Filtrar datos:"
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
};

export default FilterInput;
