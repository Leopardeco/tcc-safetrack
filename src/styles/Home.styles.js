import styled from "styled-components";

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

    button {
      background-color:${props => props.theme.buttonCollor};
      color: #fff;
      font-size:50px;
      padding:15px 30px;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 5rem;
    }
  }

  img {

    max-width: 100%;
    height: auto;
  }
`

export const CopyContainer = styled.div`
  h1{
    
  }
`

export const PrepareContainer = styled.div``

export const ConectContainer = styled.div``

export const RateContainer = styled.div``
