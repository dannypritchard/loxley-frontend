import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

const baseURL = `${import.meta.env.VITE_API_URL}/`;

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response: any) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div className="App">
      <h1>{(post as any).hello}</h1>
    </div>
  )
}

export default App
