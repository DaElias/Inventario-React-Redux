import { useState, useContext } from "react";
import { Context } from "./Store";
import { Link } from "react-router-dom";
//material ui
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";
import { Input } from "@material-ui/core";
const InsertProducts = () => {
    const [nombre, setNombre] = useState('');
    const [informacion, setInformacion] = useState('');
    const [price, setPrice] = useState('');
    const [id, setid] = useState('');
    const [amount, setamount] = useState('');
    //add context global
    const [state, setstate] = useContext(Context)
    const handleInpunt = (event) => {
        const date = event.target.value;
        const type = event.target.name;
        switch (type) {
            case 'nombre':
                setNombre(date);
                break;
            case 'informacion':
                setInformacion(date);

                break;
            case 'price':
                setPrice(date);

                break;
            case 'id':
                setid(date);
                break;
            case 'amount':
                setamount(Math.abs(date));
                break;
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //add submit a variable global
        setstate([...state, {
            name: nombre,
            id: id,
            price: price,
            descript: informacion,
            amount:amount
        }]);
        // fin add submit
        //reset useStates
        setNombre('');
        setInformacion('');
        setPrice(0);
        setid('');
    }
    //Tamaño porcentaje 
    const Width = "80%";

    return (<>
        {/*
         <Link to="/">Home</Link>
         */}
        <form onSubmit={handleSubmit}>
            <h1>--Añadir Productos--</h1>
            <label>
                <TextField
                    style={{ width: Width }}
                    id="outlined-basic" label="Nombre del Producto" variant="outlined" name="nombre" value={nombre} onChange={handleInpunt} />
            </label>
            <label>
                <h2>Informacion</h2>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Describa el producto"
                    style={{ width: Width, height: 200 }}
                    name="informacion" value={informacion} onChange={handleInpunt}
                />
            </label>
            <label>
                <h2>Precio</h2>
                <Input
                    style={{ width: Width }}
                    placeholder="Digite el precio" name="price" value={price} onChange={handleInpunt} />
            </label>
            <label>
                <h2>Cantidad</h2>
                <Input
                    type="number"
                    style={{ width: Width }}
                    placeholder="Digite la cantidad" name="amount" value={amount} onChange={handleInpunt} />
            </label>
            <label>
                <h2>Id</h2>
                <TextField
                    style={{ width: Width }}
                    id="standard-basic" label="Id del producto" variant="standard" name="id" value={id} onChange={handleInpunt} required />
            </label>
            <Button variant="contained" type="submit">Enviar!!</Button>
            <hr></hr>

        </form>
    </>

    )
}

export default InsertProducts;
