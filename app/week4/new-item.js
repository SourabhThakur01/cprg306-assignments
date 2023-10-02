"use client";

import { useState } from "react";

export default function NewItem() {
    const [name,setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    }


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
        <main>
            <form>
                <input type="text" value={name} onChange={handleChangeName} required/>
                <input type="number" min={1} max={99} value={quantity} onChange={handleChangeQuantity} required />
                <select value={category} onChange={handleChangeCategory}>
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
                    <option value="other">Other</option>Category
                </select>
                <submit onClick={handleSubmit}>Submit</submit>
            </form>
        </main>
    )
}
