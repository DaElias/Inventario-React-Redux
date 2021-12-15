//import { render } from "react-dom";
import React, { useState } from "react";
/*
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

*/
import { ShowProducts } from "./components/ShowProducts";
import { Store } from "./components/Store";
import Menu from "./components/styles/Menu";
import InsertProducts from "./components/InsertProducts";
import { Box } from "@material-ui/core";
//material ui
function App() {
  const [WindowsAdd, setWindowsAdd] = useState(true);
  const[WindowsShow,setWindowsShow]=useState(false);
  return (
    <Box style={{background:"white",borderRadius:"20px"}}>
      <Store >
        {/*
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<ShowProducts/>}/>
        <Route path="/add" element={<InsertProducts/>}/>
        </Routes>
        </BrowserRouter>
      */}
        {!WindowsAdd&&
          <InsertProducts />
        }
        {!WindowsShow&&
          <ShowProducts/>
        }

      </Store>
      <Menu 
      setWindowsAdd={setWindowsAdd} 
      WindowsAdd={WindowsAdd}
      WindowsShow={WindowsShow}
      setWindowsShow={setWindowsShow}
      />
    </Box>
  );
}

export default App;
