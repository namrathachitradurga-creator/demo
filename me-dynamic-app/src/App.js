import React,{useState} from 'react';
import'./App.css';

function App(){
  const [text,setText]=useState('');
  const handleChange=(event)=>{
  setText(event.target.value);
};

return(
  <div className="App">
    <h1>Dynamic Text Display</h1>
    <input 
     type="text"
     value={text}
     onChange={handleChange}
     placeholdeR="Type Something..."
    />
    <p>You Typed:{text}</p>
  </div> 
);
}
export default App;