import styled from 'styled-components';

export const HeadContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: relative;
`;

export const LeftItem = styled.div`
  flex: 1;

  img {
    height: 4rem;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 0.25em; /* Diminuí a altura das barras do menu hambúrguer */
    width: 3rem; /* Diminuí a largura das barras do menu hambúrguer */
    background-color: white;
    margin: 0.3rem; /* Reduzi o espaçamento entre as barras */
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const CenterItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  gap: 1.5rem; /* Reduzi o gap entre os itens centrais */

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 8rem;
    right: 2rem;
    background-color: #201e1f;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &.open {
    display: flex;
  }
`;

export const CenterItem = styled.div`
  margin: 0 8px;
  text-align: center;
  display: flex;
  gap: 0.75rem;
  img {
    height: 4rem;
  }

  p {
    margin: 4px 0 0 0;
    font-size: 2.5rem; 
    text-decoration: none;
    cursor: pointer;
    color: ${({ $isActive }) => ($isActive ? '#265B5D' : '#FFF')};
    border: none;
    background: none;
  }

  p:hover {
    color: #265B5D;
  }
`;
