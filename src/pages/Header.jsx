import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeadContainer, LeftItem, CenterItemsContainer, CenterItem, HamburgerMenu } from "../styles/Header.styles.js";
import logo from "../assets/logo.png";
import engrenagem from "../assets/funcionamento.png";
import tecnologia from "../assets/tecnologia.png";
import equipe from "../assets/equipe.png";

export function Header({ activeItem }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeadContainer>
      <Link to="/">  
        <LeftItem>
          <img src={logo} alt="uma mala com um dispositivo dentro e o nosso nome SafeTrack" />
        </LeftItem>
      </Link>
      <HamburgerMenu onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
      <CenterItemsContainer className={menuOpen ? 'open' : ''}>
        <Link to="/funcionamento" onClick={() => setMenuOpen(false)}>
          <CenterItem $isActive={activeItem === 'funcionamento'}>
            <img src={engrenagem} alt="engrenagem" />
            <p className="paragraph">Funcionamento</p>
          </CenterItem>
        </Link>
        <Link to="/tecnologia" onClick={() => setMenuOpen(false)}>
          <CenterItem $isActive={activeItem === 'tecnologia'}>
            <img src={tecnologia} alt="metade de uma engrenagem com uns cabos saindo" />
            <p>Tecnologia</p>
          </CenterItem>
        </Link>
        <Link to="/membros" onClick={() => setMenuOpen(false)}>
          <CenterItem $isActive={activeItem === 'equipe'}>
            <img src={equipe} alt="três bonecos apontando para uma engrenagem" />
            <p>Equipe</p>
          </CenterItem>
        </Link>
      </CenterItemsContainer>
    </HeadContainer>
  );
}