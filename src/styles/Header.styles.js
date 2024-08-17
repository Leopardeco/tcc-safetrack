import styled from 'styled-components';

export const HeadContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

export const LeftItem = styled.div`
  flex: 1;
  img {
    height: 8rem;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 0.3em;
    width: 4rem;
    background-color: white;
    margin: 0.4rem;
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
  gap: 2rem;

  p{
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 10rem;
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
  margin: 0 10px;
  text-align: center;
  display: flex;
  gap: 1rem;

  img {
    height: 6rem;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 3.25rem;
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