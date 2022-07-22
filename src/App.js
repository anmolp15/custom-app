import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

import Context from './Context';
function App() {
  const [list, setList] = useState([]);

  const handleAddPerson = (person) => {
    setList(prevList => [person, ...prevList]);
  }

  const handleDeletePerson = (deleteIndex) => {
    let confirmation = window.confirm('Are you seur you want to delete this person?')
    if (confirmation) {
      setList(list.filter((item, index) => index !== deleteIndex));
      setTimeout(() => {
        window.alert('Person Deleted');
      }, 100);
    }

  }
  return (
    <Context.Provider value={list}>
      <div className="app">
        <Input addPerson={handleAddPerson} />
        <Output deletePerson={handleDeletePerson} />
      </div>
    </Context.Provider>
  );
}

export default App;
