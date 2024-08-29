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
      margin-top: -5rem;
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

export const MainContainer = styled.div``;

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
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
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
    margin: 2rem 5rem;
  }

  @media (max-width: 480px) {
    margin: 1rem 2rem;
  }

  .step {
    width: 30vw;
    height: 10vh;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    text-align: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
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

    @media (max-width: 480px) {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    color: #201e1f;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #201e1f;
    margin-top: 0.625rem;
    font-size: 1rem;
    line-height: 1.5;
    font-family: "Lexend", sans-serif;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`;