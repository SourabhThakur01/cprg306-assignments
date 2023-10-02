"use client";

import { useState } from "react";

export default function NewItem() {
    const [name,setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


const handleSubmit = (event) => {
    event.preventDefault();
    
    const item ={
        name,
        quantity,
        category
    }
    console.log(item);

    alert("Name: " + name + "\nQuantity: " + quantity + "\nCategory: " + category);
    setName("");
    setQuantity(1);
    setCategory("produce");
}

return(
    <form>
        <input type="text" value={name} onChange={setName} required></input>
        <input type="number" min={1} max={99} value={quantity} onChange={setQuantity} required></input>
        <select value={category} onChange={setCategory}>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="bakery">Bakery</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
        </select>
    </form>
)
}
