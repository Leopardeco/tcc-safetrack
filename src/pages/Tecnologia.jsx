import {Header} from "./Header.jsx"
import arduino from "../assets/arduino.png"
import adaptador from "../assets/adaptador.png"
import gps from "../assets/gps.png"
import radar from "../assets/radar.png"
import ldr from "../assets/ldr.png"
import {
    ArduinoContainer,
    MainContainer,
    LdrContainer,
    GpsContainer,
    RadarContainer,
    AdaptadorContainer,
  } from "../styles/Tecnologia.style.js";

export function Tecnologia() {
    return (
        <MainContainer>
            <Header activeItem="tecnologia" />
            <ArduinoContainer>
            <h1>Nano V3.0 Compacto, poderoso e tão versátil quanto o Uno R3. A placa Arduino mais vendida e usada!</h1>
            <img src={arduino} alt="placa de arduino que junta todas as outras peças"/>
            <p>Este Arduino Nano V3.0 pode ser conectado diretamente em uma protoboard e sua conexão com cabo USB mini libera ainda mais espaço. Arduino é uma plataforma open-hardware e possui seu próprio ambiente de desenvolvimento baseado na linguagem C, simplificando a programação para iniciantes. O software pode ser encontrado gratuitamente para download neste link, disponível para Mac OS X, Windows e Linux. Esta placa é a versão open-hardware do original, ou seja, possui a mesma estrutura e componentes, mas difere-se pois não foi produzido na Itália.</p>
            </ArduinoContainer>
            <LdrContainer>
                <h2>Módulo Sensor de Luminosidade Luz LDR, Mede a intensidade da luminosidade com simplicidade e precisão.</h2>
                <img src={ldr} alt="" />
                <p>Este módulo sensor de luz é baseado em um foto resistor que mede a intensidade da luz ambiente através da variação de sua resistência interna. Este módulo sensor de luz pode ser utilizado para detectar a intensidade de luz no ambiente.</p>
            </LdrContainer>
            <GpsContainer>
                <h2>Módulo GPS GY-NEO6MV2: Conexão fácil, precisão máxima. Obtenha coordenadas e velocidade com simplicidade.</h2>
                <img src={gps} alt="" />
                <p>Este módulo é extremamente simples de ser usado. Precisa apenas de 4 fios para ser ligado, porém tome cuidado pois ele trabalha em 3,3V. Para alimentar o módulo, utilize uma saída de tensão de 5V, já que ele possui um regulador de tensão de 3,3V em seu circuito. Já para os pinos de Tx Rx é aconselhável a utilização de um Conversor de Nível Lógico.</p>
            </GpsContainer>
            <RadarContainer>
                <h2>Módulo Radar Doppler HB100: Detecta movimento com precisão por micro-ondas.</h2>
                <img src={radar} alt="" />
                <p>Este é o Módulo Radar Doppler HB100, sensor capaz de detectar movimento por Microondas.</p>
            </RadarContainer>
            <AdaptadorContainer>
                <h2>Alimente seu Arduino com facilidade: Adaptador ideal para baterias de 9V.</h2>
                <img src={adaptador} alt="" />
                <p>Alimente seu Arduino com facilidade: Adaptador ideal para baterias de 9V.</p>
            </AdaptadorContainer>
        </MainContainer>
       


    )
  }