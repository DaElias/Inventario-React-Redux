
const Product = ({name,descript,price,id}) => {
    return (
        <div>
            <h1>Nombre: {name}</h1>
            <h2>Description</h2>
            <p>{descript}</p>
            <h3>Price: ${price}</h3>
            <h3>Id: {id}</h3>
            <hr></hr>
        </div>
    )
}

export default Product;
