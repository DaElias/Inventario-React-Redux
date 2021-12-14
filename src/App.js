import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ShowProducts } from "./components/ShowProducts";
import { Store } from "./components/Store";
import InsertProducts from "./components/InsertProducts";
import Home from "./components/Home";
//material ui

function App() {


  return (
    <BrowserRouter>
      <Store >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit" element={<ShowProducts/>}/>
          <Route path="/add" element={<InsertProducts/>}/>
        </Routes>
      </Store>
    </BrowserRouter>
  );
}

export default App;
