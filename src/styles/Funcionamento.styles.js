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

    @media (max-width: 768px) {
      font-size: 2.5rem;
      padding: 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      padding: 1rem;
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


  @media (max-width: 768px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-block: 2rem ;

  }

  @media (max-width: 480px) {
  }
  

  .step {
    margin-top:1.25rem;
    width: 30vw;
    height: 10vh;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    text-align: left;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 70vw;
      height: 30vh;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      width: 70vw;
      height: 30vh;
    }
  }

  .numero {
    background-color: #201e1f;
    color: #fff;
    font-size: 1.875rem;
    font-weight: bold;
    padding: 0.625rem;
    border-radius: 50%;
    margin-right: 1.25rem;
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      width: 4rem;
      height: 4rem;
    }
  }

  h2 {
    font-size: 2rem;
    color: #201e1f;

    @media (max-width: 768px) {
      font-size: 2.5rem;
      padding-block: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    color: #201e1f;
    margin-top: 0.625rem;
    font-size: 1rem;
    line-height: 1.5;
    font-family: "Lexend", sans-serif;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      font-weight: 500;
    }

    @media (max-width: 320px) {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;