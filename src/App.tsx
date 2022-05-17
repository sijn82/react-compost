
import React, { useState } from 'react';
import './App.css';

import Logo from './components/Logo'
import Portal from './components/Portal';


function App() {

    
    const [homepage, setHomepage] = useState(true)

    if (homepage) {

        return (
   
            <div className="App">
      
              <Logo name="simon" homepage={homepage} setHomepage={setHomepage} />
              
            </div>
      
        );

    } else {

        return (

            <div className='App'>

                <Portal />

            </div>

        )
 
    }

}

export default App;
