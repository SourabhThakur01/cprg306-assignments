"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json"
import ItemList from "../week3/item-list";

const ItemList = () => {
    const [sortBy, setSortBy] = useState("name"); 
    
    const sortItems = () => {
        if(sortBy === "name"){
            return items.sort((a,b) => a.name.localeCompare(b.name));
        } else if(sortBy === "category"){
            return items.sort((a,b) => a.category.localeCompare(b.category));
        }
    }
}