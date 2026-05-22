import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    
    font-size: 62.5%;
  

  }
   body {
    line-height: 1.5;
    background: #fff;
    color: #111;
  }
   p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
    ul, ol {
    list-style: none;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
    input, button, textarea, select {
    font: inherit;
    border: none;
    outline: none;
    background: none;
  }

  button {
    cursor: pointer;
  }
 
 
:root {
   --blue:#1A9BDC;
   --dark-blue:#60A5FA;
   --orange:#FD7E14;
   --black:#0F172A;
   --soft-black:#111111;
   --dark-black:#1a1a1a;
   --white:#ffffff;
   --grey:#F3F4F6;
   --dark-grey:#A3A5A9
   
   


   

}
`;

export default GlobalStyles;
