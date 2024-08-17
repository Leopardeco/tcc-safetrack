import styled from "styled-components";

export const CardContainer = styled.div`

`

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    div.text-button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 7rem;

    h1 {
      margin-bottom: 10rem; 
      font-family: "Alexandria", sans-serif;
    }

    button {
      background-color:${props => props.theme.buttonCollor};
      color: #fff;
      font-size:20px;
      padding:5px 5px 10px 10px;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  img {
    margin-right:30rem;
    max-width: 50%; 
    height: auto;
  }
`

export const CopyContainer = styled.div``

export const PrepareContainer = styled.div``

export const ConectContainer = styled.div``

export const RateContainer = styled.div``
