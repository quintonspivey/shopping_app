import React, {useState} from 'react';
import ErrandForm from './components/ErrandForm';
import ErrandChart from './components/ErrandChart';
import './App.css';

function App(props) {
  const [errandList, setErrandList] = useState([]);
  const addErrand = (entry) => {
let entries = [...errandList,entry];
setErrandList(entries);                         
  };
  return (
    <div className="App">
   
      <h1>Jazz's errands</h1>
      <ErrandForm addErrand={addErrand}/>
      <ErrandChart errandList={errandList}/>
    </div>
    
  );
}

export default App;
