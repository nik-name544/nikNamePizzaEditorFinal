// import React, { useEffect, useState } from 'react'
// import { useDispatch } from "react-redux";



// export default function GetServData() {
//     const data2 = []
//     const setQuote = (data) => {
//         const data1 = [...data]
//         const dataS = [{
//             dough: {
//                 'thin': {},
//                 'fluffy': {}
//             },
//             size: {
//                 'small': {},
//                 'big': {},
//             },
//             sauce: {
//                 'tomatoSauce': {},
//                 'whiteSauce': {},
//                 'spicySauce': {},
//             },
//             cheese: {
//                 'mozzarella': {},
//                 'cheddar': {},
//                 'dorBlue': {}
//             },
//             vegetables: {
//                 'tomato': {},
//                 'mushrooms': {},
//                 'pepper': {},
//             },
//             meat: {
//                 'bacon': {},
//                 'pepperoni': {},
//                 'ham': {},
//             }
//         }]
//         const newNewData = dataS;
//         function toppings(itemNew) {
//             if (itemNew.category === "dough") {
//                 const name = itemNew.name
//                 const price = itemNew.price
//                 newNewData[0].dough[name] = ({ name, price })
//             } else if (itemNew.category === "size") {
//                 const name = itemNew.name
//                 const price = itemNew.price
//                 newNewData[0].size[name] = ({ name, price })
//             }
//             else if (itemNew.category === "sauce") {
//                 const name = itemNew.name
//                 const price = itemNew.price
//                 newNewData[0].sauce[name] = ({ name, price })

//             } else if (itemNew.category === "cheese") {
//                 const name = itemNew.name
//                 const price = itemNew.price
//                 newNewData[0].cheese[name] = ({ name, price })

//             } else if (itemNew.category === "vegetables") {
//                 const name = itemNew.name
//                 const price = itemNew.price
//                 newNewData[0].vegetables[name] = ({ name, price })
//             } else if (itemNew.category === "meat") {
//                 const name = itemNew.name
//                 const price = itemNew.price
//                 newNewData[0].meat[name] = ({ name, price })

//             }
//         }

//         let newData = data1.map((item, i) => {
//             const itemNew = item
//             toppings(itemNew)
//         })
//         data2.push(...newNewData)


//     }
//     const data = () => {

//         return fetch(`http://localhost:4000/ingredients`)
//             .then((res) => res.json())
//             .then((data) => setQuote(data))

//     }
//     data()
//     return data2

// }


