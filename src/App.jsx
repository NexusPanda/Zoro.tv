import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimeProvider } from './context/AnimeContext';
import Home from './pages/Home';
import About from './pages/About';
import AnimeDetail from './components/AnimeDetail';
import './assets/css/core.css'

function App() {
  return (
    <AnimeProvider>
      <Router>
        <nav className="bg-blue-600 p-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Zoro.tv</h1>
          <div>
            <Link to="/" className="text-white mx-2 hover:underline">Home</Link>
            <Link to="/about" className="text-white mx-2 hover:underline">About</Link>
          </div>
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/anime/:id" element={<AnimeDetail />} />
          </Routes>
        </main>
      </Router>
    </AnimeProvider>
  );
}

export default App;
