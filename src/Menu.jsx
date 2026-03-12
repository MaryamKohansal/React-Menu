const pizzaData = [
  {
    name: "Pizza Chicken",
    ingredients:
      "boneless skinless chicken, marinara or pizza sauce, shredded mozzarella, pepperoni, and Italian seasonings like garlic powder and oregano. ",
    price: 16,
    photoName: "pizzas/pizza-chicken.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/pizza-margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/pizza-spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza calzone",
    ingredients:
      "Ricotta, Mozzarella, Parmesan, mushrooms, onion, Salami, and Schinken",
    price: 14,
    photoName: "pizzas/pizza-calzone.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Pepperoni",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/pizza-pepperoni.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, ham, aragula, mushrooms, and burrata cheese",
    price: 18,
    photoName: "pizzas/pizza-funghi.jpg",
    soldOut: false,
  },
];

const drinkData = [
  {
    name: "Coca Cola",
    price: 2.5,
    photoName: "drinks/coca.jpg",
    soldOut: false,
  },
  {
    name: "Fanta",
    price: 2.5,
    photoName: "drinks/fanta.jpg",
    soldOut: false,
  },
  {
    name: "Sprite",
    price: 2.5,
    photoName: "drinks/sprite.jpg",
    soldOut: false,
  },
  {
    name: "Mezzo Mix",
    price: 2.5,
    photoName: "drinks/mezzo.jpg",
    soldOut: false,
  },
];

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Drink(props){
  return (
    <li className="drink">
      <img src={props.drinkObj.photoName} alt={props.drinkObj.name} />
      <div>
        <h3>{props.drinkObj.name}</h3>
        <span>{props.drinkObj.price}</span>
      </div>
    </li>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  const drinks = drinkData;
  const numDrinks = drinks.length;

  return (
    <main className="menu">
      <h2>Pizza Menu</h2>

      {numPizzas > 0 ? (<ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>) : null}

      <h2>Drink Menu</h2>

      {numDrinks > 0 ? (<ul className="drinks">
        {drinkData.map((drink) => (
          <Drink drinkObj={drink} key={drink.name} />
        ))}
      </ul>) : null}

    </main>
  );
}

export default Menu;
