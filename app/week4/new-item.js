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
        <main className="bg-gray-700 p-40">
            <div className="text-center">
            <form>
                <label className="block pl-10 mt-20 ">
                    <span className="">Name:</span>
                <input type="text" value={name} onChange={handleChangeName} required className="text-black ml-10"/>
                </label>
                <label className="block pr-20 mt-5">
                    <span className="mr-11">Quantity:</span>
                <input type="number" min={1} max={99} value={quantity} onChange={handleChangeQuantity} required className="text-black pl-11"/>
                </label>
                <label className="block pr-20 mt-5 mb-10">
                    <span className="mr-11 ml-3">Category:</span>
                <select value={category} onChange={handleChangeCategory} className="text-black ">
                    <option value="produce" className="text-black">Produce</option>
                    <option value="dairy" className="text-black">Dairy</option>
                    <option value="meat" className="text-black">Meat</option>
                    <option value="bakery" className="text-black">Bakery</option>
                    <option value="frozen foods" className="text-black">Frozen Foods</option>
                    <option value="canned goods" className="text-black">Canned Goods</option>
                    <option value="dry goods" className="text-black">Dry Goods</option>
                    <option value="beverages" className="text-black">Beverages</option>
                    <option value="snacks" className="text-black">Snacks</option>
                    <option value="household" className="text-black">Household</option>
                    <option value="other" className="text-black">Other</option>Category
                </select>
                </label>
                    <submit onClick={handleSubmit} className="py-3 px-5 bg-gray-700 hover:bg-gray-500 rounded-md">Submit</submit>
            </form>
            </div>
        </main>
    )
}
