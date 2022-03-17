import React from 'react';

function ErrandChart({errandList}) {
    return (
   <div>
    
    {errandList.map((errands)=> {
        return <h2>{errands}</h2>
    } 
  
    )}
   </div>
    );
}
export default ErrandChart;
