import React from 'react';
import Header from './components/header';
import "./styles.css";
import Main from "./components/pages";

const App = () =>(
    <div className="App"> 
        <Header />
        <Main />
    </div>     
);
//componente é um conjunto de partes visuais (html) e parte funcional (js)
// e estilização (css)

export default App;