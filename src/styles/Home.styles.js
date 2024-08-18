import styled from "styled-components";
import bgComoUsar from "../assets/bgcomousar.png"
import avalie from "../assets/avalie.png"

export const CardContainer = styled.div`
`

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    div.text-button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 7rem;

    h1 {
      font-size:70px;
      margin-left:5rem;
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
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

export const CopyContainer = styled.div`
  width: 100%;
  max-width: 900px; 
  min-height: 600px; 
  border-radius: 12px; // Bordas arredondadas
  background-color: #545454;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Sombra suave para criar efeito de card
  padding: 2rem; // Espaçamento interno
  text-align: center; // Alinha o texto ao centro
  margin-inline: auto;
  margin-bottom: 15rem ;

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
  display: flex;
  flex-direction: column; /* Alinha o título e o SectionMultiple verticalmente */
  align-items: center;
  justify-content: space-between;
  background-image: url(${bgComoUsar});
  background-size: cover;
  background-position: center;
  height: 100vh;

  h1 {
    color: white;
    margin-top: 5rem; /* Espaçamento entre o título e as sections */
    margin-bottom: 15rem; /* Espaçamento entre o título e as sections */
    text-align: center;
    font-size:80px;
  }

  section {
    gap:2rem;
    display: flex;
    flex-direction: column; /* Garante que o conteúdo das sections esteja em coluna */
    align-items: center;
    text-align: center;
    margin: 0 2rem; /* Espaçamento entre as sections */
    color: white;
  }


  section img {
    max-width: 100%;
    height: auto;
    margin-bottom: 5rem;
}

/* Estilo para os títulos */
section h2 {
    font-size: 32px;
    margin-bottom:3rem;
}

/* Estilo para os parágrafos */
section p {
    font-family: "Lexend", sans-serif;
    font-size: 18px;
}
`;

export const SectionMultiple = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom:45rem;
`;


export const ConectContainer = styled.div`
    margin-top:5rem;     
    width: 100%;
    max-width: 1000px;
    border-radius: 8px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
        

        
      h1 {
        text-align: center;
        margin-bottom: 5rem;
    }

    
    
      div {
        flex: 1;
        padding: 20px;
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
        margin: 5px 0 0;
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
    width: 100%;
    height: 600px; // Define uma altura fixa para o iframe
    border: none; // Remove a borda do iframe
  }
`
