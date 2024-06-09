import React, { FC, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Pizza from './models/pizzaModel';
import PizzaList from './components/PizzaList';
const App:FC = ()=>{
  const [pizzasList , setPizzasList] = useState<Pizza[]>([])
  const addPizza = (newPizza : Pizza)=>{
    setPizzasList([...pizzasList , newPizza])
  }
  return (
    <div className="App">
      <div className="wrap">
        <div className="heading">Наша пицца </div>
      </div>
      <Form />
      <PizzaList />
    </div>
  );
}

export default App;
