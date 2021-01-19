// import { observable, action, computed } from 'mobx';
// import { useQuery } from "react-query"; 
// class PizzaStore {
//     @observable pizzaData = PizzaDataStore()
//     @observable finalTotal = 0
//     @observable toppings = []
//     @observable cardNum = ""
//     // @observable address = [{
//     //     address:"",
//     //     entrance:"",
//     //     floor:"",
//     //     apartment:""
//     // }]
//     @observable address = []
//     // // @action ToppingsName({dough}) {
//     // @action ToppingsName({ doughName, sizeName, sauceName, cheeseName, vegetablesName, meatName }) {
//     //     // const dough = this.pizzaData[0].dough[doughName].name;
//     //     this.toppings.push(doughName, sizeName, sauceName, cheeseName, vegetablesName, meatName)
//     //     // console.log(doughName)
//     //     console.log(this.toppings)
//     // }
// }
// export default new PizzaStore()
// export const FinalTotal = ({ dough, size, sauce, cheese, vegetables, meat }) => {
//     let pizzaData = PizzaDataStore()[0]
//     const doughPrice = pizzaData.dough[dough].price;
//     // const doughName = pizzaData.dough[dough].name
//     const sizePrice = pizzaData.size[size].price;
//     // const sizeName = pizzaData.size[size].name;
//     const saucePrice = pizzaData.sauce[sauce].price;
//     // const sauceName = pizzaData.sauce[sauce].name;
//     const cheesePrice = cheese.reduce(
//         (price, cheese) => price + pizzaData.cheese[cheese].price,
//         0
//     );
//     // const cheeseName = cheese.reduce(
//     //     (name, cheese) => name = pizzaData.cheese[cheese].name,
//     //     0
//     // )
//     const vegetablesPrice = vegetables.reduce(
//         (price, vegetables) => price + pizzaData.vegetables[vegetables].price,
//         0
//     );
//     // const vegetablesName = vegetables.reduce(
//     //     (name, vegetables) => name = pizzaData.vegetables[vegetables].name,
//     //     0
//     // );
//     const meatPrice = meat.reduce(
//         (price, meat) => price + pizzaData.meat[meat].price,
//         0
//     );
//     // const meatName = meat.reduce(
//     //     (name, meat) => name = pizzaData.meat[meat].name,
//     //     0
//     // ); 
//     // new PizzaStore().ToppingsName({doughName, sizeName, sauceName, cheeseName, vegetablesName, meatName})
//     // toppings.push({doughName, sizeName, sauceName, cheeseName, vegetablesName, meatName})
//     // console.log(meatName)
//     // PizzaStore.Someddd(meatName)
//     // PizzaStore.toppings.push(doughName)
//     return doughPrice + sizePrice + saucePrice + cheesePrice + vegetablesPrice + meatPrice + 200;
// }
// export const ToppingsName = ({ dough, size, sauce, cheese, vegetables, meat }) => {
//     //     let pizzaData = pizzaDataStore()[0] 
//     //     const doughName = pizzaData.dough[dough].name
//     //     const sizeName = pizzaData.size[size].name;
//     //     const sauceName = pizzaData.sauce[sauce].name;
//     //     const cheeseName = cheese.reduce(
//     //         (name, cheese) => name = pizzaData.cheese[cheese].name,
//     //         0
//     //     )
//     //     const vegetablesName = vegetables.reduce(
//     //         (name, vegetables) => name = pizzaData.vegetables[vegetables].name,
//     //         0
//     //     );
//     //     const meatName = meat.reduce(
//     //         (name, meat) => name = pizzaData.meat[meat].name,
//     //         0
//     //     ); 
//     //     let newTopping = [doughName, sizeName, sauceName, cheeseName, vegetablesName, meatName]
//     //     console.log(newTopping)
//     //     // PizzaStore.toppings = newTopping
//     //     // new PizzaStore().toppings.push(newTopping)
//     //     // return newTopping
// }
// // export const result = async () => {
// //     return await fetch("http://localhost:3000/ingredients")
// //     .then((res) =>  res.json()).then((data)=> console.log(data))
// // }
// function PizzaDataStore() {
//     // console.log(JSON.stringify(result))
//     // const { isLoading, isError, data, error } = useQuery(
//     //     "someId",  () => fetch(`http://localhost:3000/ingredients`).then((res) => res.json())
//     // );
//     // if (isError) {
//     //     return <>Error: {JSON.stringify(error)}</>;
//     // }
//     // if (isLoading) {
//     //     return <>Loading...</>;
//     // }
//     return [
//         {
//             dough: {
//                 thin: { name: 'thin', price: 25, checked: false },
//                 fluffy: { name: 'fluffy', price: 40, checked: false },
//             },
//             size: {
//                 small: { name: 'small', price: 25, checked: false },
//                 big: { name: 'big', price: 50, checked: false },
//             },
//             sauce: {
//                 tomatoSauce: { name: 'tomato sauce', price: 15, checked: false },
//                 whiteSauce: { name: 'white sauce', price: 20, checked: false },
//                 spicySauce: { name: 'spicy sauce', price: 25, checked: false },
//             },
//             cheese: {
//                 mozzarella: { name: 'mozzarella', price: 35, checked: false },
//                 cheddar: { name: 'cheddar', price: 30, checked: false },
//                 dorBlue: { name: 'dor-blue', price: 20, checked: false },
//             },
//             vegetables: {
//                 tomato: { name: 'tomato', price: 20, checked: false },
//                 mushrooms: { name: 'mushrooms', price: 40, checked: false },
//                 pepper: { name: 'pepper', price: 30, checked: false },
//             },
//             meat: {
//                 bacon: { name: 'bacon', price: 30, checked: false },
//                 pepperoni: { name: 'pepperoni', price: 35, checked: false },
//                 ham: { name: 'ham', price: 20, checked: false },
//             },
//         },
//     ]
// }
"use strict";