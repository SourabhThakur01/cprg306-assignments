"use client";

import { useState } from "react";

export default function setName() {
    const [name] = useState("");
}

export default function setQuantity() {
    const [quantity] = useState(1);
}

export default function setCategory() {
    const [category] = useState("produce");
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