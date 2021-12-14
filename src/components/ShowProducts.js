import React, { useContext } from 'react';
import { Context } from './Store';
//import { Link } from 'react-router-dom';
// add products
import Product from './Product';
export const ShowProducts = () => {
    const [state, setstate] = useContext(Context);

    //Editar Productos
    const DeleteProduct = (id) => {
        setstate(state.filter((product) => {
            if (product.id !== id) {
                return { product }
            }
            return "";
        }));
    };
    const EditProduc = (id, newProduc) => {
        setstate(state.map((product) => {
            if (product.id === id) {
                return { ...product, 
                    name: newProduc.name,
                    descript:newProduc.descript,
                    price:newProduc.price,
                    amount:newProduc.amount
                }
            }
            return product;
        }));
    };

    return (
        <div
        style={{marginBottom:60}}
        >
            {/*
            <Link to="/">Home</Link>
             */}
            <h1>--List of Products--</h1>
            {state.map((index) => {
                return <Product
                    key={index.id}
                    name={index.name}
                    descript={index.descript}
                    price={index.price}
                    DeleteProduct={DeleteProduct}
                    EditProduc={EditProduc}
                    id={index.id} 
                    amount={index.amount}
                    />
            })}
        </div>
    )
}
