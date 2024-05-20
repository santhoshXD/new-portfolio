import { createGlobalStyle } from "styled-components";
import Portfolio from "./components/Portfolio";
 
 

const GlobalStyles = createGlobalStyle`
 
 


:root{
  --primary-color : #001F3F;
  --secondary-color: #000080; 
  
}

 
 

`

 

 

function App() {

 


  return (
    <>
    <GlobalStyles/>
      <Portfolio/>
      
    </>
  );
}

export default App;
