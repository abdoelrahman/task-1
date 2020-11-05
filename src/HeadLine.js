import React from 'react';
 
const Headline = (props) => (
    <div style={{textAlign:"center"}}>
      <h1>{props.myname}</h1>
      <h1>{props.headline}</h1>
      <input type="Number"  value={props.headline} onChange={props.onChangeHeadline} />
    </div>
  );

  export default Headline;
   