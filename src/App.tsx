
import Logo from './components/Logo'

import React, { useState } from 'react';

import './App.css';

// type AppProps = {

//   homepage: boolean
// }

function App() {

    
    const [homepage, setHomepage] = useState(true)

    // function setHomepage() {
    //     props.homepage = false
    // }

    if (homepage) {

        return (
   
            <div className="App">
      
              <Logo name="simon" homepage={homepage} setHomepage={setHomepage} />
              
      
            </div>
      
        );
    } else {

        return (
            <div className='App'>
                <h1> We've entered the portal of no return </h1>
            </div>
        )

 
    }

    

      


}

export default App;
