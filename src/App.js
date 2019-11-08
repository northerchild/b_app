import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Frase from './Components/Frase';


function App() {
  const [frase, obtenerFrase] = useState({});
  const consultarAPI = async()=>{
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // Agregar el resultado de la API al state; (similar a this.setState)
    obtenerFrase(resultado.data[0])
  }
    //consulta a una rest Api
  useEffect(
    () =>{
      consultarAPI();
    },[]
  );
  return (
    <div className="contenedor">
      <Frase frase={frase}/>
    </div>
  );
}

export default App;
