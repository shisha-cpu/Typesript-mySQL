import { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/pizzaModel";
import './styles.css'
import axios from "axios";
const  initialState ={
    title: '' ,
    price : '',
    img: ''
}



const Form:FC = ()=>{
    const [pizza , setPizza ] = useState<Pizza>(initialState)

    const handleChange = (e:ChangeEvent)=>{
        const {name , value  }:any = e.target   
        setPizza({...pizza , [name ]: value})
    } 
    const handleSubmit = (e:FormEvent)=>{
        axios.post('http://localhost:4444/pizza' , pizza)
    }

    return(
        <div className="wrap">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="title"
                placeholder="название"
                value={pizza.title}
                onChange={handleChange}
                />
                  <input 
                type="text"
                name="price"
                placeholder="цена"
                value={pizza.price}
                onChange={handleChange}
                />
                  <input 
                type="text"
                name="img"
                placeholder="фото"
                value={pizza.img}
                onChange={handleChange}
                />
                <input type="submit" value="Добавить" />
            </form>
        </div>
    )
}
export default  Form