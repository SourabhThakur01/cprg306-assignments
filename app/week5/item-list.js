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

        <div className="text-center font-mono">
            <h1 className="text-xl m-1 px-2 text-yellow-400 font-bold">Sort by:</h1>
            <button onClick= {() => setSortBy("name")} className = {`px-4 m-2 h-10 border rounded-full hover:bg-blue-500 ${sortBy === "name"? "bg-red-500":""}`}>Name</button>
            <button onClick={() => setSortBy("category")}className= {`px-4 m-2 h-10 border rounded-full hover:bg-blue-500 ${sortBy === "category"? "bg-green-500":""}`}>Category</button>
            
            <div className="m-2 flex justify-center ">
            <ul className="border rounded-3xl w-[700px] bg-green-300 ">
                {sortItems().map((item) => (
                    <li className= "ml-[150px] border rounded-full bg-orange-800 my-5 max-w-sm h-10 hover:max-w-md hover:bg-purple-800 " key={item.id}>
                        {Item(item)}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}