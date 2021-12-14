import { useState } from "react";

const Product = ({ name, descript, price, DeleteProduct, id, EditProduc }) => {
    const [nameN, setname] = useState(name);
    const [priceN, setprice] = useState(price);
    const [descriptN, setdescript] = useState(descript);
    const [windows, setwindows] = useState(false);
    const handleEdit = (id) => {
        EditProduc(id, {
            name: nameN,
            descript: descriptN,
            price: priceN
        });
        btnWindows();
    }

    const btnWindows = () => {
        setwindows(!windows);
    }
    const handleInput = (event) => {
        const data = event.target.value;
        const type = event.target.name;
        switch (type) {
            case "name":
                setname(data);
                break;

            case "price":
                setprice(data);
                break;

            case "descript":
                setdescript(data);
                break;
        }
    }

    return (
        <div>
            {!windows
                ?
                <>
                    <h1>Nombre: {name}</h1>
                    <h2>Description</h2>
                    <p>{descript}</p>
                    <h3>Price: ${price}</h3>
                    <h3>Id: {id}</h3>
                    <hr></hr>
                    <button
                        onClick={() => { btnWindows() }}
                    >Editar</button>
                    <button
                        onClick={() => { DeleteProduct(id) }}
                    >Eliminar</button>
                </>
                :
                <>
                    <label>
                        <h1>Name:</h1>
                        <input type='text' value={nameN} onChange={handleInput} name="name" />
                    </label>
                    <label>
                        <h1>Price</h1>
                        <input type='number' value={priceN} onChange={handleInput} name="price" />
                    </label>
                    <label>
                        <h1>Description</h1>

                        <textarea type='number' value={descriptN} onChange={handleInput} name="descript" />
                    </label>
                    <button onClick={() => { handleEdit(id) }} >Enviar</button>
                    <button onClick={() => { btnWindows() }} >Cancelar</button>
                </>
            }

        </div>
    )
}

export default Product;
