import styled from "styled-components";
import bgComoUsar from "../assets/bgcomousar.png"
import avalie from "../assets/avalie.png"

export const CardContainer = styled.div`
overflow: hidden;

`

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh; 
    width: 100vw; 
    margin-bottom: 15rem;
    gap: 10rem;
  

    .text-button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    

    h1 {
      font-size:75px;
      margin-bottom: 15rem; 
      font-family: "Alexandria", sans-serif;
    }

    a {
  background-color: ${props => props.theme.buttonCollor};
  color: #fff;
  font-size: 50px;
  width: 100%;
  height: 8rem;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease, color 0.15s ease;
}

a:hover {
  color: ${props => props.theme.buttonCollor};
  background-color: #fff;
}


    @media (max-width: 768px) {
      margin-left: 0;
      
      
      h1{
        
        font-size:5rem;
        text-align: center;
      }

      a{
        font-size: 3.5rem;
      }

      img{
        display:none;
        
      }
    }
  }

  img {
    padding-top: 15rem;
    height: auto;
    display: block; 
    
    @media (max-width: 768px) {
      display: none; 
    }
  }
`

export const CopyContainer = styled.div`
  width: 100%;
  max-width: 1000px; 
  min-height: 600px; 
  flex-wrap: wrap;
  border-radius: 12px; 
  background-color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: justify; 
  margin-inline: auto;
  margin-bottom: 15rem ;

  h1 {
    font-size: 4rem;
    margin-block: 5rem;
    line-height: 1.4; 
    color: #fff;
  }

  p {
    
    font-size: 3rem; // Tamanho da fonte do parágrafo
    color: #fff; // Cor do texto do parágrafo
    line-height: 1.3; // Melhora a legibilidade do parágrafo
    font-family: "Lexend", sans-serif;
  }

  span {
    font-weight: bold; // Destaca o texto
    color: #fff; // Cor destacada para o texto
  }

  @media (max-width: 768px) {
    width: 80%;
    min-height: auto;
    margin-bottom: 10rem ;
    
    
    
    h1{
      font-size:2.5rem;
      margin-block:2rem;
    }

    p{
      font-size: 1.75rem;
      margin-bottom:2rem;
      
    }
    
    }
`;

export const PrepareContainer = styled.div`
  padding: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  margin-bottom:5rem;
`;
export const Title = styled.div`
    color: white;
    margin-top: 5rem; /* Espaçamento entre o título e as sections */
    margin-bottom: 7rem; /* Espaçamento entre o título e as sections */
    text-align: center;
    font-size:32px;
`

export const SectionMultiple = styled.div`
    display: flex;
    flex-direction: row; /* Alinha as seções horizontalmente */
    justify-content: center;
    
    gap: 30px; 

    section {
      display: flex;
      flex-direction: column;
      min-width: 300px;
      gap: 1.875rem;
      background-color:#333;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      h2 {
        font-size: 18px;
        color: #fff;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 2rem;
        color: #fff;
        line-height: 1.4;
        font-family: "Lexend", sans-serif;
      }
    }
    @media (max-width: 768px) {
    flex-wrap: wrap

    }
`;


export const ConectContainer = styled.div`
  
  margin-top: 7rem;
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    max-width: 350px;
    text-align: center;
    margin-bottom: 7rem;
  }

  div {
    align-items: center;
    max-width: 600px;
    gap: 2.7rem;
    padding: 1.25rem;
  }

  .borda {
    border-left: 1px solid #ddd;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 18px;
    color: #fff;
  }

  p {
    margin: .3rem 0 0;
    color: #fff;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom:5rem;

    div {
      margin-left: 0.7rem;
      flex-wrap: wrap;
    }
    .borda {
      border-top: 1px solid #ddd;
      border-left: 0;
    }
  }
`

export const Conectdiv = styled.div`
  display: flex;
  width: 100%;
  
  
  `

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100vw;
  margin-bottom:5rem;
`

export const RateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  padding: 2rem;
  gap: 5rem;
  margin-bottom:3rem; 


  p{
    max-width: 700px;
    flex-wrap:wrap;
    text-align: justify;
    font-family: "Lexend", sans-serif;
  }

  a {
      background-color:${props => props.theme.buttonCollor};
      color: #fff;
      font-size:25px;
      padding:15px 30px;
      border-radius: 10px;
      cursor: pointer;
      text-decoration: none;
      transition: background-color 0.15s ease, color 0.15s ease;
    }

    a:hover{
      color:${props => props.theme.buttonCollor};
      background-color:#fff;
    }
    
`

