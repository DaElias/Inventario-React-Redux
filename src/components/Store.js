import React, { useState,useEffect } from "react";


const initialState = [
    {
        name: "example1",
        id: '123',
        price: '200',
        descript: 'example1 product is very good!!.',
        amount:0
    },
    {
        name: "example2",
        id: '321',
        price: '400',
        descript: 'example2 product is the better good!!.',
        amount:0
    }
]

const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setstate] = useState(localStorage.getItem('datos')? JSON.parse(localStorage.getItem('datos')) : initialState);
    useEffect(()=>{
        localStorage.setItem('datos',JSON.stringify(state));
    },[state]);
    return (
        <Context.Provider value={[state, setstate]}>
            {children}
        </Context.Provider>
    )
}

export { Store, Context };
