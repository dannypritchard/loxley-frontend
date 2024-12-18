import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <div className="App w-100 vh-100">
            <header>
                <h1 className="text-3xl font-bold underline">
                    Loxley Industries
                </h1>
            </header>

            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </div>
    );
}

export default App;
