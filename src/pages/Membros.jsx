import { cardContainer, mainContainer, copyContainer, prepareContainer } from "./Membros.styles"
import logo from "../assets/logo.png"
import leo_foto from "../assets/leo.png"
import mota_foto from "../assets/mota.png"
import nicolau_foto from "../assets/nicolau.png"
import alan_foto from "../assets/alan.png"

export function Home() {
  return (
    <cardContainer>
      <mainContainer>
      <h1>Segurança de Malas</h1>
      <button>Saiba Mais</button>
      <img src={aeroporto} alt="foto de um homem em um hall de aeroporto" />
      <img src={fundoImg} alt="fundo azul" />
    </mainContainer>
    <copyContainer>
        <h1>Imagine viajar com a 
  certeza de que suas malas estão
  sempre seguras e localizáveis.</h1>
    <p>O Safetrack  é o dispositivo de rastreamento e acompanhamento de malas de 
viagem oferece essa tranquilidade, permitindo que você se concentre em 
aproveitar sua jornada, mas ciente da situação da sua bagagem.</p>
    </copyContainer>
    <prepareContainer>
      <img src={bgComoUsar} alt="Mão segurando uma mala" />
    </prepareContainer>
    </cardContainer>
    
  )
}
