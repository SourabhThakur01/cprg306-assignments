"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json"

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name"); 
    
    const sortItems = () => {
        if(sortBy === "name"){
            return items.sort((a,b) => a.name.localeCompare(b.name));
        } else if(sortBy === "category"){
            return items.sort((a,b) => a.category.localeCompare(b.category));
        }
    }

    return(

        <div className = "flex">
            <h1 className="text-xl my-3">Sort by:</h1>
            <button onClick= {() => setSortBy("name")} className=" p-2 m-2 h-10 bg-gray-800 border rounded-md hover:bg-blue-500 ">Name</button>
            <button onClick={() => setSortBy("category")}className=" p-2 m-2 h-10 bg-gray-800 border rounded-md hover:bg-blue-500 ">Category</button>

            <ul className = "m-4 p-30">
                {sortItems().map((item) => (
                    <li key={item.id}>
                        {item.name} = {item.category}
                    </li>
                ))}
            </ul>
        </div>
    )
}