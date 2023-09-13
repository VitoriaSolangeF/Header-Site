import React, {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";

function App() {
  const [busca, setBusca] = useState ('');

  return (
    <div className="App">
      <Header/> 

    </div>
  );
}

export default App;