import { ShowProducts } from "./components/ShowProducts";
import { Store } from "./components/Store";
import InsertProducts from "./components/InsertProducts";
function App() {


  return (
    <Store >
      <InsertProducts />
      {/*
    */}
      <ShowProducts />
    </Store>
  );
}

export default App;
