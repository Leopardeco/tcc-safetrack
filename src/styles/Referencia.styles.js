import styled from "styled-components";

export const ReferencesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza verticalmente */

  h1 {
    white-space: nowrap;
    font-size: 6rem;
    color: #fff;
    margin-block: 6rem;
    text-align: center;
  }

    @media (max-width: 768px) {
      h1{
        font-size: 4rem;
        white-space: wrap;
      }
      

    }
  
  
`;

export const ReferencesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
  align-items: center; /* Centraliza os cards horizontalmente */
`;

export const ReferenceCard = styled.div`
  background: #333;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 2.4rem;
  line-height: 2.4;
  color: #ddd;
  width: 80%;
  max-width: 700px; /* Limita a largura máxima do card */
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 0;
    flex-grow: 1;
  }

  strong {
    color: #59a1e8;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    width: 100%; /* Ajusta o card para ocupar toda a largura disponível em telas pequenas */
  }
`;

export const HeadContainer = styled.div`
  /* Adicione estilos aqui se necessário */
`;
