import React,{useContext} from 'react';
import { Context } from './Store';
// add products
import Product from './Product';
export const ShowProducts = () => {
    const [state, setstate] = useContext(Context);
    return (
        <div>
            <h1>--List of Products--</h1>
            {state.map((index,i)=>{
                return <Product key={i} name={index.name} descript={index.descript} price={index.price} id={index.id}/>
            })}
        </div>
    )
}
