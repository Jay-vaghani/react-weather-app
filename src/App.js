import React from 'react';
import Search from './components/search/search';
import './App.css'
import CurrentWether from './components/current-weather/current-weather';

function App() {


  const handleOnSearchChange = (searchData) =>{
    
  }

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWether />
    </div>
  );
}

export default App;





