import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

const Menu = () => {
    return (
        <Container>
            <h1>Sistema de Gestion de Inventario <code 
                style={{fontSize:10}}
            >v 1.0.0</code></h1>
            <Link to="/edit">Mostrar Productos</Link>
            <hr></hr>
            <Link to="/add">Añadir Productos</Link>
        </Container>
    )
}

export default Menu;
