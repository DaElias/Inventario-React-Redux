import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <div>
            <h1>Inventario</h1>
            <Link to="/edit">Mostrar Productos</Link>
            <hr></hr>
            <Link to="/add">Añadir Productos</Link>
        </div>
    )
}

export default Menu;
