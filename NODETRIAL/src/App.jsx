import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/contacts',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'MEHULPOSH123@'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // Convert object to string or pick property to display
        setText(data.message);
      })
      .catch((error) => {
        console.error(error);
        setText("Error fetching data");
      });
  }, []); // run only once when component mounts

  return (
    <>
      <div>
        {text}
      </div>
    </>
  )
}

export default App;
