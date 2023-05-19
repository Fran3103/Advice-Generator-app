
import { useEffect, useState } from 'react';
import './App.css';
import lineaMobile from './images/pattern-divider-mobile.png';
import lineaDesktop from './images/pattern-divider-desktop.png';
import boton from './images/icon-dice.png';
function App() {

  const [frase, setFrase] = useState()
  
   
   
  const nuevaFrase = () =>{
    fetch('https://api.adviceslip.com/advice')
        .then((resp) => resp.json())
        .then((data) =>{
          setFrase(data)
          
        })
  }

    useEffect(() =>{
        nuevaFrase ();
      },
    
    [])
  
  

  return (
    <div className="App">
      { frase &&
          
          <div className='container'>

              <p className='adviceNumber'>ADVICE # {frase.slip.id} </p>

              <p className='adviceText'>
                "{frase.slip.advice}"
              </p>

              <img className='imgMobile' src={lineaMobile} alt='linea mobile' />
              <img className='imgDesktop' src={lineaDesktop} alt='linea desktop' />
              <div className='containerBoton' onClick={nuevaFrase} >
                <img className='boton' src={boton} alt='boton' onClick={nuevaFrase}  />
              </div>
  
          </div>

      }
        
    </div>
  );
}

export default App;
