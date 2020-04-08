import React, { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard'
import {IntlComponent} from './components/IntlComponent';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { I18NCompnent } from './components/I18NComponent';

import {store} from './store/appStorage';

/*const Theme1 = React.lazy(() => import('./themes/pink.module.css'));
const Theme2 = React.lazy(() => import('./themes/blue.module.css'));*/

function App() {
  const [appName, setAppName] = useState("x");
  const [lang, setLang] = useState("");

  useEffect(() => {
    let theme : any;
    setAppName("Noman Ali Abbasi");
    setLang("ur");

    if( lang === 'ur') {
        //theme = 'primereact/resources/themes/luna-pink/theme.css';
        theme = './themes/pink.module.css';
        console.log(`luna-pink: Lang: ${lang}`)
    } else {
        theme = './themes/blue.module.css';
        console.log(`nova-colored: Lang: ${lang}`)
    }

    store.dispatch({ type: 'INCREMENT' })
    console.log(store.getState())
    store.dispatch({ type: 'DECREMENT' })
    console.log(store.getState())
  }, [lang]);


  return (
    <div className="App">
      <header className="App-header">
          Learn React with typescript {lang}
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
