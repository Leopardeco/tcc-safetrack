import {Header} from "./Header.jsx"
import arduino from "../assets/arduino.png"
import adaptador from "../assets/adaptador.png"
import gps from "../assets/gps.png"
import radar from "../assets/radar.png"
import ldr from "../assets/ldr.png"
import {
    GeralContainer,
    HeadContainer,
    ArduinoContainer,
    MainContainer,
    LdrContainer,
    GpsContainer,
    RadarContainer,
    AdaptadorContainer,
    TitleContainer
  } from "../styles/Tecnologia.style.js";

export function Tecnologia() {
    return (
        <GeralContainer>
            <HeadContainer>
                <Header activeItem="tecnologia" />
            </HeadContainer>
            <MainContainer>
                <TitleContainer>
                    <h1>
                        Tecnologias Usadas
                    </h1>
                </TitleContainer>
                <ArduinoContainer>
                    <div>
                    <h2>Nano V3.0 Compacto, poderoso e  tão versátil quanto o Uno R3.  A placa Arduino mais vendida e usada!</h2>
                    <p>Este Arduino Nano V3.0 pode ser conectado diretamente em uma protoboard e sua conexão com cabo USB mini libera ainda mais espaço. </p>
                    </div>

                    <img src={arduino} alt="placa de arduino que junta todas as outras peças"/>
                </ArduinoContainer>
                <LdrContainer>
                    <div>
                    <h2>Módulo Sensor de Luminosidade Luz LDR Mede a intensidade da luminosidade com  simplicidade e precisão.</h2>
                    <p>Este módulo sensor de luz é baseado em um foto resistor que mede a intensidade da luz ambiente através da variação de sua resistência interna. Este módulo sensor de luz pode ser utilizado para detectar a intensidade de luz no ambiente.</p>
                    </div>
                    <img src={ldr} alt="" />
                </LdrContainer>
                <GpsContainer>
                    <div>
                    <h2>Módulo GPS GY-NEO6MV2: Obtenha coordenadas e velocidade com simplicidade.</h2>
                    <p>Este módulo é extremamente simples de ser usado. Precisa apenas de 4 fios para ser ligado, porém tome cuidado pois ele trabalha em 3,3V. Já para os pinos de Tx Rx é aconselhável a utilização de um Conversor de Nível Lógico.</p>
                    </div>
                    <img src={gps} alt="" />
                </GpsContainer>
                <RadarContainer>
                    <div>
                    <h2>Módulo Radar Doppler HB100: Detecta movimento com precisão por micro-ondas.</h2>
                    <p>Este é o Módulo Radar Doppler HB100, sensor capaz de detectar movimento por Microondas.</p>
                    </div>
                    <img src={radar} alt="" />
                </RadarContainer>
                <AdaptadorContainer>
                    <div>
                    <h2>Alimente seu Arduino com facilidade: Adaptador ideal para baterias de 9V.</h2> 
                    <p>Alimente seu Arduino com facilidade: Adaptador ideal para baterias de 9V.</p>
                    </div>
                    <img src={adaptador} alt="" />
                </AdaptadorContainer>
            </MainContainer>
        </GeralContainer>
    )
  }