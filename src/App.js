import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import Exterminators from './components/Exterminators';
import { Route, Routes } from 'react-router-dom';





function App() {
  return (
    <div className="App">
     <Navigation />

      <main>
        <Routes>
          <Route path="/" element={< Home /> } />
          <Route path="/characters" element={< Characters /> } />
          <Route path="/charactersdetails/:id" element= { <CharacterDetails/> } />
          <Route path="/exterminators" element={< Exterminators /> } />
        </Routes>
      </main>
      
      
    </div>
  );
}

export default App;
