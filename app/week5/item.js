export default function Item({name, quantity, category}){
    return(
        <div class="mx-5 px-2 border bg-gray-800 border-gray-800  my-5 py-1 max-w-sm">
            <h2 class="text-xl font-bold">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </div>
    )
}