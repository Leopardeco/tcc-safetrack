import styled from "styled-components";
import explainimg from "../assets/explainimg.png";

export const ImagemContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    max-height: 62.5rem;
    object-fit: cover;
    margin-top: -15.625rem;

    @media (max-width: 768px) {
      margin-top: -10rem;
      max-height: 40rem;
    }

    @media (max-width: 480px) {
      margin-top: -8rem;
      max-height: 30rem;
    }
  }
`;

export const EtapasContainer = styled.div`
  h2 {
    font-size: 3rem;
    padding: 1.875rem;
    display: flex;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    text-align: center;
    justify-content: center;

    

    @media (max-width: 375px) {
      font-size: 2rem;
      padding: 2rem;
    }
  }
`;

export const MainContainer = styled.div`
  overflow: hidden;
`;

export const FunctionContainer = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 3rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

`;

export const HeaderContainer = styled.div`
`;

export const GroupContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ParearContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .step {
    margin-top: 1.25rem;
    width: 30vw;
    min-height: 10vh;
    display: flex;
    flex-direction: row; /* Organiza o número à esquerda e o texto à direita */
    align-items: center;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    text-align: left;

    @media (max-width: 768px) {
      width: 70vw;
      min-height: 20vh;
      padding: 1.5rem;
    }

    @media (max-width: 480px) {
      width: 80vw;
      padding: 1rem;
    }
  }

  .numero {
    background-color: #201e1f;
    color: #fff;
    font-size: 1.875rem;
    font-weight: bold;
    padding: 0.625rem;
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.25rem; /* Espaço entre número e texto */

    @media (max-width: 768px) {
      width: 4rem;
      height: 4rem;
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 1.5rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Garante alinhamento à esquerda */
  }

  h2 {
    font-size: 1.5rem;
    color: #201e1f;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #201e1f;
    font-size: 1rem;
    line-height: 1.5;
    font-family: "Lexend", sans-serif;
    margin-top: 0.5rem; /* Espaço entre o título e o parágrafo */
    text-align: left;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`;