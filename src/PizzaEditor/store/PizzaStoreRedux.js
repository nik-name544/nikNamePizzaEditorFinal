import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
// const server = process.env.LINK_TO_ING


const setQuote = (data) => {
    const data2 = []
    const data1 = [...data] || ["",""]
    const dataS = [{
        dough: {
            'thin': {},
            'fluffy': {}
        },
        size: {
            'small': {},
            'big': {},
        },
        sauce: {
            'tomatoSauce': {},
            'whiteSauce': {},
            'spicySauce': {},
        },
        cheese: {
            'mozzarella': {},
            'cheddar': {},
            'dorBlue': {}
        },
        vegetables: {
            'tomato': {},
            'mushrooms': {},
            'pepper': {},
        },
        meat: {
            'bacon': {},
            'pepperoni': {},
            'ham': {},
        }
    }]
    const newNewData = dataS;
    function toppings(itemNew) {

        if (itemNew.category === "dough") {
            const name = itemNew.slug 
            const slug = itemNew.name 
            const price = itemNew.price
            const image = itemNew.image
            const thumbnail = itemNew.thumbnail
            newNewData[0].dough[name] = ({ name, price, image, thumbnail, slug })
        } else if (itemNew.category === "size") {
            const name = itemNew.slug 
            const slug = itemNew.name 
            const price = itemNew.price
            const image = itemNew.image
            const thumbnail = itemNew.thumbnail
            newNewData[0].size[name] = ({ name, price, image, thumbnail, slug })
        }
        else if (itemNew.category === "sauce") {
            const name = itemNew.slug 
            const slug = itemNew.name 
            const price = itemNew.price
            const image = itemNew.image
            const thumbnail = itemNew.thumbnail
            newNewData[0].sauce[name] = ({ name, price, image, thumbnail, slug })

        } else if (itemNew.category === "cheese") {
            const name = itemNew.slug 
            const slug = itemNew.name 
            const price = itemNew.price
            const image = itemNew.image
            const thumbnail = itemNew.thumbnail
            newNewData[0].cheese[name] = ({ name, price, image, thumbnail, slug })

        } else if (itemNew.category === "vegetables") {
            const name = itemNew.slug 
            const slug = itemNew.name 
            const price = itemNew.price
            const image = itemNew.image
            const thumbnail = itemNew.thumbnail
            newNewData[0].vegetables[name] = ({ name, price, image, thumbnail, slug })
        } else if (itemNew.category === "meat") {
            const name = itemNew.slug 
            const slug = itemNew.name 
            const price = itemNew.price
            const image = itemNew.image
            const thumbnail = itemNew.thumbnail
            newNewData[0].meat[name] = ({ name, price, image, thumbnail, slug })

        }
    }

    data1.forEach((item, i) => {
        const itemNew = item
        toppings(itemNew)
    })
//     console.log(newData)
    data2.push(...newNewData)
    return data2
}

export const fetchdata = createAsyncThunk("pizza/fetchdata", async () => {
    // console.log(`${server}/ingredients`)
    // console.log(process.env.LINK_TO_ING)
    // const result = await fetch(`${server}/ingredients`)
    const result = await fetch(`https://dzs9l.sse.codesandbox.io/ingredients`)
        .then((res) => res.json())
        .then((data) => setQuote(data))
    return result
});

const initialState = {
    toppings: [],
    address: [],
    cardnum: "",
    total: 200,
    registered: false,
    pizzaServData: [],
    orderList: [],
    servAnswer: {
        isLoading: false,
        isError: false,
        error: ""
    },
};

const pizzaLogic = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        pizzaName: (state, action) => {
            state.toppings = action.payload
        },
        finalTotal: (state, action) => {
            state.total = action.payload
        },
        cardNum: (state, action) => {
            state.cardnum = action.payload
        },
        address: (state, action) => {
            state.address = action.payload
        },
        registered: (state, action) => {
            state.registered = action.payload
        },
        orderList: (state, action) => {
            state.orderList = action.payload
        },
        servAnswer: (state, action) => {
            state.servAnswer.isLoading = action.isLoading
            state.servAnswer.isError = action.isError
            state.servAnswer.error = action.error
        },
    },
    extraReducers: {
        [fetchdata.fulfilled]: (state, action) => {
            state.pizzaServData = action.payload;
        },

    }
})

export const finalTotal = (values, PizzaServData) => {
    if (PizzaServData !== undefined) {
        let pizzaData = PizzaServData
        const doughPrice = Number(pizzaData.dough[values.dough].price);
        const sizePrice = Number(pizzaData.size[values.size].price);
        const saucePrice = Number(pizzaData.sauce[values.sauce].price);
        const cheesePrice = values.cheese.reduce(
            (price, cheese) => price + Number(pizzaData.cheese[cheese].price),
            0
        );
        const vegetablesPrice = values.vegetables.reduce(
            (price, vegetables) => price + Number(pizzaData.vegetables[vegetables].price),
            0
        );
        const meatPrice = values.meat.reduce(
            (price, meat) => price + Number(pizzaData.meat[meat].price),
            0
        );
        return doughPrice + sizePrice + saucePrice + cheesePrice + vegetablesPrice + meatPrice + 200;
    }
    else {
        return 200
    }
}




export const store = configureStore({ reducer: pizzaLogic.reducer });

store.dispatch(fetchdata()); 
