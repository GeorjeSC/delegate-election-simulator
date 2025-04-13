// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocentePanel from './pages/DocentePanel';
import EstudiantePanel from './pages/EstudiantePanel';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/docente" component={DocentePanel} />
                <Route path="/estudiante" component={EstudiantePanel} />
            </Switch>
        </Router>
    );
};

export default App;
