import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import loxley from './assets/loxley.svg';

function App() {
    return (
        <div className="flex flex-col h-screen">
            <header className="text-white p-4">
                <img src={loxley} alt="Loxley Industries" />
            </header>

            <main className="flex-1 p-4 overflow-auto">
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </main>

            <footer className="text-white p-4">
                <p className="text-center">Copyright 2024.</p>
            </footer>
        </div>
    );
}

export default App;
