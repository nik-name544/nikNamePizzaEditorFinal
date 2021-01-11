

export const toppingsName = ({ values, PizzaServData, PizzaName, dispatch }) => { 
    const newTopping = []
    let pizzaData = PizzaServData
    const doughName = pizzaData.dough[values.dough].name
    const sizeName = pizzaData.size[values.size].name;
    const sauceName = pizzaData.sauce[values.sauce].name;
    const cheeseName = values.cheese.map((name, i) => {
        return pizzaData.cheese[name].name
    })
    const vegetablesName = values.vegetables.map((name, i) => {
        return pizzaData.vegetables[name].name
    })
    const meatName = values.meat.map((name, i) => {
        return pizzaData.meat[name].name
    })
    newTopping.push(doughName, sizeName, sauceName, ...cheeseName, ...vegetablesName, ...meatName) 
    PizzaName = [...newTopping]
    dispatch({ type: "pizza/pizzaName", payload: PizzaName })
}
