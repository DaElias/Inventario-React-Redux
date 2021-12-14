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
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //add submit a variable global
        setstate([...state, {
            name: nombre,
            id: id,
            price: price,
            descript: informacion
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
        <Link to="/">Home</Link>
        <form onSubmit={handleSubmit}>
            <h1>--Añadir Productos--</h1>
            <TextField
                style={{ width: Width}}
                id="outlined-basic" label="Nombre del Producto" variant="outlined" name="nombre" value={nombre} onChange={handleInpunt} />

            <label>
                <h1>Informacion</h1>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Describa el producto"
                    style={{ width: Width, height: 200 }}
                    name="informacion" value={informacion} onChange={handleInpunt}
                />
            </label>
            <label>
                <h1>Precio</h1>
                <Input 
                style={{ width: Width }}
                placeholder="Digite el precio" name="price" value={price} onChange={handleInpunt} />

            </label>
            <label>
                <h1>Id</h1>
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
