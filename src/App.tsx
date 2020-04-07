import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard'
import {IntlComponent} from './components/IntlComponent';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';
import { I18NCompnent } from './components/I18NComponent';

function App() {
  const [appName, setAppName] = useState("x");
  
  useEffect(() => {
    setAppName("Noman Ali Abbasi")
  }, []);
  
   
  return (
    <div className="App">
      <header className="App-header">        
          Learn React with typescript        
      </header>
      <h1>
        {appName}
      </h1>
      <Keyboard/>
      <IntlComponent/>
      <I18NCompnent/>
    </div>
  );
}

export default App;
