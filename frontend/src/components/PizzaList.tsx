import { FC, useEffect, useState } from "react";
import axios from "axios";
import Pizza from "../models/pizzaModel";
const PizzaList:FC =()=>{
    const [pizzas , setPizzas] = useState<Pizza[]>([])
    useEffect(()=>{
        axios.get('http://localhost:4444/pizza')
        .then(res=>setPizzas(res.data))
    },[])
    console.log(pizzas);
    
    return(
        <div className="wrap">
             {pizzas&& pizzas.map((pizza, id) => (
                <div className="pizza" key={id}>
                  
                    <h2>  {pizza.title}</h2>
             
                    <span>       {pizza.price} р </span>
                    <img src={pizza.img} alt="" />
                </div>
            ))}
        </div>
    )
}

export default PizzaList