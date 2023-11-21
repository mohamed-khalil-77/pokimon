// App.js
import React from 'react';
import './App.css'; // Vos styles CSS
import PokeGallery from './assets/PokeGallery.jsx'; // Importer le composant PokeGallery
import Pokemon from './assets/Pokemon';
function App() {
  return (
    <div className="App">
      <PokeGallery /> {/* Utilisation du composant PokeGallery */}
    </div>
  );
}

export default App;
