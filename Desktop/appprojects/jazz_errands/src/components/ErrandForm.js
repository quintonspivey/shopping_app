import React, {useState} from 'react';


function ErrandForm({addErrand}) {
  const [errand, setErrand]  = useState();
  
    
    const handleSubmit= (e) => {
        addErrand(errand);
        e.preventDefault();
    }
    
    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <label>Errand</label>
        <input
        name="errand"
            value={errand}
            onChange={e => setErrand(e.target.value)}
            type ="text"
            placeholder="type your errand"
        />
       
        
        <button onClick={handleSubmit} >
addErrand
        </button>
        </form>
    )
}

export default ErrandForm;
