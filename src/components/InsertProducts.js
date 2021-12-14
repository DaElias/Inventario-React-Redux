import { useState, useContext } from "react";
import { Context } from "./Store";
const InsertProducts = () => {
    const [nombre, setNombre] = useState('');
    const [informacion, setInformacion] = useState('');
    const [price, setPrice] = useState(0);
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
    return (
        <form onSubmit={handleSubmit}>
            <h1>--Añadir Productos--</h1>
            <label>
                <h1>Nombre</h1>
                <input type='text' name="nombre" value={nombre} onChange={handleInpunt} />
            </label>
            <label>
                <h1>Informacion</h1>
                <input type='text' name="informacion" value={informacion} onChange={handleInpunt} />
            </label>
            <label>
                <h1>Precio</h1>
                <input type='number' name="price" value={price} onChange={handleInpunt} />
            </label>
            <label>
                <h1>Id</h1>
                <input type='text' name="id" value={id} onChange={handleInpunt} />
            </label>
            <input type='submit' />
            <hr></hr>
        </form>
    )
}

export default InsertProducts;
