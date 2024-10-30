import styled from "styled-components";

export const PrimContainer = styled.div`
    background-color: #201E1F;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const TitleContainer = styled.div`
    h1{
        font-size: 6rem;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-block: 6rem;
    }
`

export const HeadContainer = styled.div`
`

export const MainContainer = styled.div`
    flex-grow: 1;
    display: flex;
    gap: 6rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1rem;

    img {
        width: 35vh;
        max-width: 100%;
        padding: 1rem;
    }

    .link {
        width: 4rem;
    }

    a{
        color: #FFF;
        text-decoration: none;
        font-size: 2rem;
        font-weight: 300;

    }

    h2{
        font-size: 4rem;
        font-weight: bold;
    }

    @media (max-width: 768px) {
    flex-direction: column;
    flex-grow: 1;
    gap: 2rem;
    overflow: visible;
    justify-content: center;
    }
`

export const NickContainer = styled.div`
    text-align: center;
    
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const MotaContainer = styled.div`
    text-align: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const LeoContainer = styled.div`
    text-align: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const AlanContainer = styled.div`
    text-align: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`