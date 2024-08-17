import React from 'react';
import { Link } from 'react-router-dom';
import { HeadContainer, LeftItem, CenterItemsContainer, CenterItem } from "../styles/Header.styles.js";
import logo from "../assets/logo.png";
import engrenagem from "../assets/funcionamento.png";
import tecnologia from "../assets/tecnologia.png";
import equipe from "../assets/equipe.png";

export function Header({ activeItem }) {
  return (
    <HeadContainer>
      <LeftItem>
        <img src={logo} alt="uma mala com um dispositivo dentro e o nosso nome SafeTrack" />
      </LeftItem>
      <CenterItemsContainer>
        <Link to="/funcionamento">
          <CenterItem $isActive={activeItem === 'funcionamento'} >
            <img src={engrenagem} alt="engrenagem" />
            <p>Funcionamento</p>
          </CenterItem>
        </Link>
        <Link to="/tecnologia">
          <CenterItem $isActive={activeItem === 'tecnologia'} >
            <img src={tecnologia} alt="metade de uma engrenagem com uns cabos saindo" />
            <p>Tecnologia</p>
          </CenterItem>
        </Link>
        <Link to="/membros">
          <CenterItem $isActive={activeItem === 'equipe'} >
            <img src={equipe} alt="três bonecos apontando para uma engrenagem" />
            <p>Equipe</p>
          </CenterItem>
        </Link>
      </CenterItemsContainer>
    </HeadContainer>
  );
}