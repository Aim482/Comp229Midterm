import './App.css';
import { createContext } from 'react';
import Inputbox from './components/Inputbox'
import Product from './components/product'


  export const NameContext = createContext ();
  export const DesContext = createContext ();

const App =() => {

  

  return (

    <div className="App">
      <header>
        {<Inputbox/>}
        {<Product/>}
      </header>
    </div>
  );
}

export default App;
