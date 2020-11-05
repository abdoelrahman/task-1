import React, { useState } from 'react';
import Headline from './HeadLine';



const App = () => {
  const [Count, setCount] = useState(0);
  const [name] = useState("Abdelrahman");
  const [divStyle, setDivStyle] = useState({});
  const handleChange = event => {
    if(Count >=10){ 
      setDivStyle({
        backgroundColor: "lightblue",
        color: 'white',
        fontSize: 50
      });
    }
    
    setCount(event.target.value);
  }
 
  return (
    <div style={divStyle}>
      <Headline myname={name} headline={Count} onChangeHeadline={handleChange} />
      </div>
  );
};
 

 
export default App;