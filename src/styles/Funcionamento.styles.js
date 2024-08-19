import styled from "styled-components";
import explainimg from "../assets/explainimg.png";

export const FunctionContainer = styled.div`

  

  h2 {
    margin-top: 20px;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

  ul {
    padding-left: 0; /* Remove o padding padrão */
    list-style-position: inside; /* Alinha o texto do tópico com o símbolo */
  }

  li {
    margin-left: 0; /* Remove a margem padrão à esquerda */
    padding-left: 0; /* Remove o padding à esquerda */
    text-align: left; /* Garante que o texto fique alinhado à esquerda */
  }
  
`;


export const ParearContainer = styled.div`
  width:80%;
  margin: auto;

  .step {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .numero {
    background-color: #201e1f;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    border-radius: 50%;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 24px;
    color: #201E1F;
  }

  p {
    color: #201E1F;
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
    font-family: "Lexend", sans-serif;
  }
`;


