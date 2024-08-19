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
    height: 100vh; /* Ocupa toda a altura da viewport */
    width: 100vw; /* Ocupa toda a largura da viewport */
    
    @media (max-width: 768px) {
      img{
        visibility: hidden;
      }
      
      div.text-button-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left:45rem
      }
      

    }

    div.text-button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size:75px;
      margin-left: 8rem;
      margin-bottom: 15rem; 
      font-family: "Alexandria", sans-serif;
    }

    a {
      background-color:${props => props.theme.buttonCollor};
      color: #fff;
      font-size:50px;
      padding:15px 30px;
      border-radius: 10px;
      cursor: pointer;
      text-decoration: none;
    }

    a:hover{
      color:${props => props.theme.buttonCollor};
      background-color:#fff;
    }
  }

  img {
    max-width: 70%;
    height: auto;
  }
`

export const CopyContainer = styled.div`
  width: 100%;
  max-width: 900px; 
  min-height: 600px; 
  flex-wrap: wrap;
  border-radius: 12px; // Bordas arredondadas
  background-color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Sombra suave para criar efeito de card
  padding: 2rem; // Espaçamento interno
  text-align: center; // Alinha o texto ao centro
  margin-inline: auto;
  margin-bottom: 15rem ;

  @media (max-width: 768px) {
    width: 80%;
    flex-wrap: wrap

    }

  h1 {
    font-size: 4rem; // Tamanho da fonte maior
    margin-block: 5rem; // Espaçamento abaixo do título
    line-height: 1.4; // Melhora a legibilidade do título
    color: #fff; // Cor do texto
  }

  p {
    font-size: 3rem; // Tamanho da fonte do parágrafo
    color: #fff; // Cor do texto do parágrafo
    line-height: 1.6; // Melhora a legibilidade do parágrafo
    font-family: "Lexend", sans-serif;
  }

  span {
    font-weight: bold; // Destaca o texto
    color: #fff; // Cor destacada para o texto
  }
`;

export const PrepareContainer = styled.div`
  padding: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
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
    margin-top:7rem;     
    width: 100%;
    max-width: 1000px;
    border-radius: 8px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
        
    @media (max-width: 768px) {
      display: flex;
     justify-content: center;
     div{
      margin-left: 0.7rem;
     }

    }
        
      h1 {
        text-align: center;
        margin-bottom: 7rem;
    }

    
    
      div {
        flex: 1;
        padding: 1.25rem;
        border-left: 1px solid #ddd;
    }

    
      div:first-child {
        border-left: none;

    }

    
      h2 {
        margin-bottom: 2rem;
        font-size: 18px;
        color: #fff;
    }

    
      p {
        margin: .300rem 0 0;
        color: #fff;
        font-family: "Lexend", sans-serif;
    }
`

export const Conectdiv = styled.div`
  display: flex;
  width: 100%;`

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
  align-items: center; // Centraliza horizontalmente
  width: 100%;
  min-height: 100vh; // Garante que o contêiner ocupe a altura total da viewport
  padding: 2rem;
  h1{
    margin-bottom:5rem;
  }
    
`
export const FormContainer = styled.div`

  display: flex;
  justify-content: center; // Posiciona o iframe à direita
  width: 100%;
  max-width: 1200px; // Define uma largura máxima para o contêiner do formulário
  iframe {
    border-radius:1rem;
    width: 100%;
    height: 100vw; // Define uma altura fixa para o iframe
    border: none; // Remove a borda do iframe
  }
`
