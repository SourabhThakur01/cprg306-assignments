import Item from "./item";
export default function ItemList(){
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };
    return(
        <div>
          <Item
          name={item1.name}
          date={item1.date}
          location={item1.location}
          />
          <Item
          name={item2.name}
          date={item2.date}
          location={item2.location}
          />
          <Item
          name={item3.name}
          date={item3.date}
          location={item3.location}
          />
          <Item
          name={item4.name}
          date={item4.date}
          location={item4.location}
          />
          <Item
          name={item5.name}
          date={item5.date}
          location={item5.location}
          />
          <Item
          name={item6.name}
          date={item6.date}
          location={item6.location}
          />
          <Item
          name={item7.name}
          date={item7.date}
          location={item7.location}
          />
          <Item
          name={item8.name}
          date={item8.date}
          location={item8.location}
          />
          <Item
          name={item9.name}
          date={item9.date}
          location={item9.location}
          />
          <Item
          name={item10.name}
          date={item10.date}
          location={item10.location}
          />
          <Item
          name={item11.name}
          date={item11.date}
          location={item11.location}
          />
          <Item
          name={item12.name}
          date={item12.date}
          location={item12.location}
          />
        </div>
    )
}