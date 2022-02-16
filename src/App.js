import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import Exterminators from './components/Exterminators';
import ExterminatorDetails from './components/ExterminatorDetails';
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
          <Route path="/exterminatordetails/:id" element={<ExterminatorDetails /> } />
        </Routes>
      </main>
     
      
      
    </div>
    
  );
}

export default App;
