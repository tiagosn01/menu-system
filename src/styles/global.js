import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  :root {

    font-size: 60%;
    --color-background: linear-gradient(-90deg, #232C21, #A6A69B);
    --color-primary-lighter: #D6E8EE;
    --color-primary-light: #97CADB;
    --color-primary: #018ABE;
    --color-primary-dark: #02457A;
    --color-primary-darker: #323030;
    --color-secundary: #54c0cc;
    --color-secundary-dark: #1f4f59;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-component: #9c98a6;
    --color-text-base: #6a6180;
    --color-line-in-white: #e6e6f0;
    --color-input-background: #f8f8fc;
    --color-button-text: #ffffff;
    --color-box-base: #ffffff;
    --color-box-footer: #fafafc;

  }
  
    
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: linear-gradient(-90deg, #232C21, #A6A69B);
    -webkit-font-smoothing: antialiased; 
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;    
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #DDDED8
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  *, :after, :before {
    box-sizing: border-box;
}
  
`;
