import React, {useEffect,useState } from 'react';
import Filter from './components/Filter';
import List from './components/List';
import SortButton from './components/SortButton';
import { useFetch } from './components/useFetch'

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  const fetchedData = useFetch(URL); 

  useEffect(() => {
    setResults(fetchedData);
    setFilteredResults(fetchedData);
  }, [fetchedData]); 



  const handleFilterChange = (filter: string) => {
    const filtered = results.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  const handleSort = () => {
    const sortedResults = [...filteredResults].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setFilteredResults(sortedResults);
  };

  return (
    <div>
      <h1>Prueba técnica - Jorge Calvo</h1>
      <Filter onFilterChange={handleFilterChange} />
      <SortButton onSort={handleSort} />
      <List items={filteredResults} />
    </div>
  );
};

export default App;
