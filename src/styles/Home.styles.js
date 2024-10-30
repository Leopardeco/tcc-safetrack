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
  background-color: rgba(51, 51, 51, 0.6);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Sombra mais intensa */
  padding: 3rem; /* Maior espaçamento interno */
  margin-inline: auto;
  margin-bottom: 15rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição suave ao interagir */

  &:hover {
    transform: scale(1.02); /* Leve aumento no tamanho ao passar o mouse */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Sombra mais profunda no hover */
  }

  h1 {
  
    font-size: 3.5rem;
    margin-block: 3rem;
    line-height: 1.4; 
    color: #f2f2f2; /* Cor um pouco mais clara para o título */
    font-family: "Lexend", sans-serif;
  }

  p {
    font-size: 2rem; /* Ajuste no tamanho da fonte para melhor legibilidade */
    color: #e0e0e0; /* Cor ligeiramente mais clara */
    line-height: 1.5; /* Melhor espaçamento entre linhas */
    font-family: "Lexend", sans-serif;
    margin-bottom: 2rem;
  }

  span {
    font-weight: 700; /* Peso da fonte mais forte para destaque */
    color: #4595A5; /* Cor destacada mais vibrante */
  }

  .testimonial {
  margin-top: 3rem;
  font-size: 1.8rem;
  color: #b0b0b0;
  font-style: italic;
}


  @media (max-width: 768px) {
    width: 90%;
    min-height: auto;
    padding: 2rem;
    margin-bottom: 10rem;

    h1 {
      font-size: 2.8rem;
      margin-block: 2rem;
    }

    p {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
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

  .borda, .blue {
    flex: 1; /* Faz com que cada coluna ocupe o mesmo espaço */
    padding: 2rem;
    background-color: #333;
    color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Garante que o título esteja no topo */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin: 0 1rem; /* Espaçamento horizontal */
    text-align: left; /* Centralize se quiser, usando 'center' */
  }

  h2 {
    margin-bottom: 1.5rem; /* Espaçamento menor para manter alinhamento */
    font-size: 1.8rem;
    color: #fff;
  }

  p {
    font-size: 1.6rem; /* Tamanho consistente para o parágrafo */
    line-height: 1.4; /* Altura da linha para melhorar legibilidade */
    margin-top: 0; /* Remove espaço extra entre o título e o parágrafo */
    color: #fff;
    text-align: left; /* Deixa o texto alinhado à esquerda */
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    .borda, .blue {
      text-align: center; /* Em telas pequenas, centralizamos o texto */
    }

    .borda {
      
      border-left: 0;
    }
  }
`;

export const Conectdiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: stretch; /* Garante que todos os itens tenham a mesma altura */

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos em telas menores */
    gap: 3rem;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100vw;
  margin-bottom: 10rem;
`;




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