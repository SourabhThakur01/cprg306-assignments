export default function Item({name, quantity, category}){
    return(
        <div class="my-2">
            <p>{name} Buy {quantity} in {category}</p>
        </div>
    )
}