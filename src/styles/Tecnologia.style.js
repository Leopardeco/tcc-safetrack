import styled from "styled-components";

export const GeralContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color:${props => props.theme.mainBackground};
  
  @media (max-width: 768px) {
      width: 100vw;
}
`;


export const HeadContainer = styled.header`

`;


export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction:row;
    flex-wrap:wrap;
    width: 100vw;
    display: flex;
    justify-content: center;

    p{
      font-size:.5rem;
    }

    h2{
      font-size:.5rem;
    }
  }

  @media (max-width: 350px) {
    width: 100vw;

  }
`;

export const TitleContainer = styled.div`
  
  h1{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-block: 6rem;
    font-size: 6rem;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;

    }
  
  @media (max-width: 350px) {
    h1{
      width: 100vw;
      font-size: 5rem;
    }
  }
`

export const ArduinoContainer = styled.section`
  background: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    gap:5rem;
    max-width: 400px;
  }

  h2 {
    font-size: 3.75rem;
    color: #ddd;
    margin-bottom: 2rem;
  }

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  p {
    margin-top: 2rem;
    font-size: 2rem;
    color: #ddd;
    line-height: 1.6;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
    margin-inline: 4rem;
  }

  @media (max-width: 350px) {
    h2{
      font-size: 3rem;
    }
    img{

    }
  }

`;

export const LdrContainer = styled.section`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    gap:5rem;
    max-width: 400px;
  }

  h2 {
    font-size: 3.75rem;
    color: #000;
    margin-bottom: 2rem;
  }

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  p {
    font-size: 2rem;
    color: #000;
    line-height: 1.6;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
    margin-inline: 4rem;
    }

  @media (max-width: 350px) {
    h2{
      font-size: 3rem;
    }
    img{
      width: 80vw;
    }
  }
`;

export const GpsContainer = styled.section`
  background: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    gap:5rem;
    max-width: 400px;
  }

  h2 {
    font-size: 3.75rem;
    color: #ddd;
    margin-bottom: 2rem;
  }

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  p {
    font-size: 2rem;
    color: #ddd;
    line-height: 1.6;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
    margin-inline: 4rem;
    }

  @media (max-width: 350px) {
    h2{
      font-size: 3rem;
    }
    img{
      width: 80vw;
    }
  }
`;

export const RadarContainer = styled.section`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    gap:5rem;
    max-width: 400px;
  }

  h2 {
    font-size: 3.75rem;
    color: #000;
    margin-bottom: 2rem;
  }

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  p {
    font-size: 2rem;
    color: #000;
    line-height: 1.6;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
    margin-inline: 4rem;
    }

  @media (max-width: 350px) {
    h2{
      font-size: 3rem;
    }
    img{
      width: 80vw;
    }
  }
`;

export const AdaptadorContainer = styled.section`
  background: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  div{
    gap:5rem;
    max-width: 400px;
  }

  h2 {
    font-size: 3.75rem;
    color: #ddd;
    margin-bottom: 2rem;
  }

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  p {
    font-size: 2rem;
    color: #ddd;
    line-height: 1.6;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
    margin-inline: 4rem;
    }

  @media (max-width: 350px) {
    h2{
      font-size: 3rem;
    }
    img{
      width: 80vw;
    }
  }
`;

export const BlueContainer = styled.section`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  div{
    gap:5rem;
    max-width: 400px;
  }

  h2 {
    font-size: 3.75rem;
    color: #000;
    margin-bottom: 2rem;
  }

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  p {
    font-size: 2rem;
    color: #000;
    line-height: 1.6;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
    margin-inline: 4rem;
    }

  @media (max-width: 350px) {
    h2{
      font-size: 3rem;
    }
    img{
      width: 80vw;
    }
  }
`;