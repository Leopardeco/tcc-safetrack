import React from 'react';
import { HeadContainer, LeftItem, CenterItemsContainer, CenterItem } from "./Header.styles.js";
import logo from "../assets/logo.png";
import engrenagem from "../assets/funcionamento.png";
import tecnologia from "../assets/tecnologia.png";
import equipe from "../assets/equipe.png";

export function Header() {
  return (
    <HeadContainer>
      <LeftItem>
        <img src={logo} alt="uma mala com um dispositivo dentro e o nosso nome SafeTrack" />
      </LeftItem>
      <CenterItemsContainer>
        <CenterItem>
          <img src={engrenagem} alt="engrenagem" />
          <p>Funcionamento</p>
        </CenterItem>
        <CenterItem>
          <img src={tecnologia} alt="metade de uma engrenagem com uns cabos saindo" />
          <p>Tecnologia</p>
        </CenterItem>
        <CenterItem>
          <img src={equipe} alt="três bonecos apontando para uma engrenagem" />
          <p>Equipe</p>
        </CenterItem>
      </CenterItemsContainer>
    </HeadContainer>
  );
}