import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/beach.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
  }

  body {
    background-image: url(${BGImage});
    
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;
export const Wrapper = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: 'Fascinate Inline', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: -webkit-linear-gradient(top, #fff, #86f0fe);
    background-image: linear-gradient(180deg, #fff, #86f0fe);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0184a2);
    font-size: 75px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
  }
  .start, .next {
    cursor:pointer;
    background: linear-gradient(180deg, #fff, #fecb90);
    border: 2px solid #d38457; 
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0px 40px;
  }
  .start {
    max-width: 200px
  }
`