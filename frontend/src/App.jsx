import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    fetch('http://56.228.24.13:3000/api/get-answer')
      .then((res) => res.json())
      .then((data) => setAnswer(data.data));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Latest Answer</h1>
        <span id="answer" className="answer">{answer || 'No data received yet'}</span>
      </div>
    </div>
  );
}

export default App;
