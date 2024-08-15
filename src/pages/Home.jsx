import { cardContainer, mainContainer, copyContainer, prepareContainer, conectContainer, rateContainer } from "./Home.styles"
import aeroporto from "../assets/aeroporto.png"
import bgComoUsar from "../assets/bgcomousar.png"
import {Header} from "./Header"
import setaum from "../assets/arrow_1.png"
import setadois from "../assets/arrow_2.png"
import setatres from "../assets/arrow_3.png"
import setaquatro from "../assets/arrow_4.png"
import avalie from "../assets/avalie.png"

export function Home() {
  return (
    <cardContainer>
      < Header/>
      <mainContainer>
      <h1>Segurança de Malas</h1>
      <button>Saiba Mais</button>
      <img src={aeroporto} alt="foto de um homem em um hall de aeroporto" />
    </mainContainer>
    <copyContainer>
        <h1>Imagine viajar com a 
        certeza de que suas malas estão
        sempre seguras e localizáveis.</h1>
        <p>O Safetrack é o dispositivo de rastreamento e acompanhamento de malas de 
        viagem oferece essa tranquilidade, permitindo que você se concentre em 
        aproveitar sua jornada, mas ciente da situação da sua bagagem.</p>
    </copyContainer>
    <prepareContainer>
      <img src={bgComoUsar} alt="Mão segurando uma mala" />
      <img src={setaum} alt="Seta apontando para direita com o número 1" />
      <img src={setadois} alt="Seta apontando para direita com o número 2" />
      <img src={setatres} alt="Seta apontando para direita com o número 3" />
      <img src={setaquatro} alt="Seta apontando para direita com o número 4" />
      <h2>1.Posicione o 
      SafeTrack</h2>
      <p>Coloque o dispositivo 
SafeTrack dentro da
 sua bagagem de mão
 ou mala despachada.</p>
      <h2>2.Ligue o 
      SafeTrack</h2>
      <p>Ligue o dispositivo
SafeTrack pressionado
o botão liga/desliga.</p>
      <h2>3.Baixe o 
      Aplicativo</h2>
      <p>Baixe o aplicativo
Safetrackapp
gratuitamente na App
Store ou Google Play.</p>
      <h2>4.Abra o
      Aplicativo</h2>
      <p>Abra o aplicativo
SafeTrackapp em seu
smartphone.</p>
    </prepareContainer>
    <conectContainer>
      <h1>Conecte-se ao SafeTrack</h1>
      <h2>Bluetooth</h2>
      <p>Ative o Bluetooth em seu 
      smartphone.</p>
      <h2>Emparelhamento</h2>
      <p>O aplicativo SafeTrackApp irá procurar 
automaticamente o
 dispositivo SafeTrack e 
solicitar o emparelhamento.</p>
      <h2>Confirmação</h2>
      <p>Confirme o emparelhamento
      no aplicativo SafeTrackApp.</p>
    </conectContainer>
    <rateContainer>
      <h1>Avalie-nos</h1>
      <img src={avalie} alt="foto de um iphone" />
      <iframe src="https://docs.google.com/forms/d/1LDamaKxiSROsg_U6EO75vuHUhq_KRwnZqsGo2vMNx3E/edit?pli=1" frameborder="0"></iframe>
    </rateContainer>
    </cardContainer>
    
  )
}
