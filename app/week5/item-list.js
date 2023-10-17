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

        <div className="text-center">
            <h1 className="text-xl m-1 px-2">Sort by:</h1>
            <button onClick= {() => setSortBy("name")} className = {`px-2 m-2 h-10 bg-gray-800 border rounded-md hover:bg-blue-500 ${sortBy === 'name'? "bg-blue-500" : ""}`}>Name</button>
            <button onClick={() => setSortBy("category")}className= {`px-2 m-2 h-10 bg-gray-800 border rounded-md hover:bg-blue-500 ${sortBy === 'category'? "bg-blue-500" : ""}`}>Category</button>
            
            <div className="m-2">
            <ul className="content border rounded-full max-h-lg max-w-3xl">
                {sortItems().map((item) => (
                    <li className= "mx-5 px-2 border rounded-full bg-gray-800 border-gray-800  my-5 py-1 max-w-sm" key={item.id}>
                        {Item(item)}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}