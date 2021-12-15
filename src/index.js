import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Container } from "@material-ui/core";
//import Menu from "./components/styles/Menu";
const backgorund = {
  background: "#0F2027", /* fallback for old browsers */
  background: "-webkit - linear - gradient(to right, #2C5364, #203A43, #0F2027)",  /* Chrome 10-25, Safari 5.1-6 */
  background: "linear - gradient(to right, #2C5364, #203A43, #0F2027)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

ReactDOM.render(

  <Container >
    <App />
    <svg 
      style={{
        position:"fixed",
        width:"100%",
        left:0,
        top:"83%",
        zIndex:"-1"
      }}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,320L20,288C40,256,80,192,120,176C160,160,200,192,240,181.3C280,171,320,117,360,106.7C400,96,440,128,480,144C520,160,560,160,600,138.7C640,117,680,75,720,80C760,85,800,139,840,154.7C880,171,920,149,960,165.3C1000,181,1040,235,1080,224C1120,213,1160,139,1200,117.3C1240,96,1280,128,1320,160C1360,192,1400,224,1420,240L1440,256L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
  </Container>

  ,
  document.getElementById('root')
);
