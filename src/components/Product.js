import { useState } from "react";
import Card from './styles/Card';
import CardEdit from './styles/CardEdit';
//material ui
import { TextField } from "@material-ui/core";
const Product = ({ name, descript, price, DeleteProduct, id, EditProduc, amount }) => {
    const [nameN, setname] = useState(name);
    const [priceN, setprice] = useState(price);
    const [descriptN, setdescript] = useState(descript);
    const [amountN, setamount] = useState(amount)
    const [windows, setwindows] = useState(false);


    const handleEdit = (id) => {
        EditProduc(id, {
            name: nameN,
            descript: descriptN,
            price: priceN,
            amount: amountN
        });
        btnWindows();
    }

    const btnWindows = () => {
        setwindows(!windows);
    }


    return (
        <div>
            {!windows
                ?
                <>
                    <Card
                        name={name}
                        descript={descript}
                        amount={amount}
                        price={price}
                        id={id}
                        btnWindows={btnWindows}
                        DeleteProduct={DeleteProduct}
                    />
                    {/*
                <Container>
                    <h1>Nombre: {name}</h1>
                    <h2>Description</h2>
                    <p>{descript}</p>
                    <h3>Price: ${price}</h3>
                    <h3>Id: {id}</h3>
                    <h3>Cantidad: {amount}</h3>
                    <button
                        onClick={() => { btnWindows() }}
                    >Editar</button>
                    <button
                        onClick={() => { DeleteProduct(id) }}
                    >Eliminar</button>
                    <hr></hr>
                </Container>
                 */}

                </>
                :
                <>
                    <CardEdit
                        id={id}
                        name={nameN}
                        setname={setname}
                        descript={descriptN}
                        setdescript={setdescript}
                        amount={amountN}
                        setamount={setamount}
                        price={priceN}
                        setprice={setprice}
                        handleEdit={handleEdit}
                        btnWindows={btnWindows}
                    />
                </>
            }

        </div>
    )
}

export default Product;
