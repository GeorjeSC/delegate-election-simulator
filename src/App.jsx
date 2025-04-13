import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocentePanel from './pages/DocentePanel';
import EstudiantePanel from './pages/EstudiantePanel';

function App() {
    return (
        <Router basename="/delegate-election-simulator"> {/* Usa basename aquí */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="docente" element={<DocentePanel />} />
                <Route path="estudiante" element={<EstudiantePanel />} />
            </Routes>
        </Router>
    );
}

export default App;
