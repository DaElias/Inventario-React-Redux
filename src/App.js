//import { render } from "react-dom";
import React  from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ShowProducts } from "./components/ShowProducts";
import { Store } from "./components/Store";
import Menu from "./components/styles/Menu";
import InsertProducts from "./components/InsertProducts";
import { Box } from "@material-ui/core";
import Home from './components/Home';
//material ui
function App() {

  return (
    <Box style={{background:"white",borderRadius:"20px"}}>
      <Store >
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<ShowProducts/>}/>
        <Route path="/add" element={<InsertProducts/>}/>

        </Routes>
      <Menu />
        </BrowserRouter>
       

      </Store>
    </Box>
  );
}

export default App;
