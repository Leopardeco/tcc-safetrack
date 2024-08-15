import { headContainer, contContainer, logoContainer, funContainer, techContainer, teamContainer } from "./Header.styles"
import logo from "../assets/logo.png"
import engrenagem from "../assets/engrenagem.png"
import tecnologia from "../assets/tecnologia.png"
import equipe from "../assets/equipe.png"


export function Header() {
  return (
    <headContainer>
      <contContainer>
        <logoContainer>
          <img src= {logo} alt="uma mala com um dispositivo dentro e o nosso nome SafeTrack" />
        </logoContainer>
        <funContainer>
          <img src= {engrenagem} alt="engrenagem" />
          <p>Funcionamento</p>
        </funContainer>
        <techContainer>
          <img src={tecnologia} alt="metade de uma engrenagem com uns cabos saindo" />
          <p>Tecnologia</p>
        </techContainer>
        <teamContainer>
          <img src= {equipe} alt="tres bonecos apontando para uma engrenagem" />
          <p>Equipe</p>
        </teamContainer>
      </contContainer>

        
    </headContainer>
  )
}
