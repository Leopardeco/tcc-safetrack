import {Header} from "./Header.jsx"
import arduino from "../assets/arduino.png"
import arduino from "../assets/arduino.png"
import { MainContainer } from "../styles/Tecnologia.style.js"

export function Tecnologia() {
    return (
        <MainContainer>
            <Header activeItem="tecnologia" />
            <h1>  Nano V3.0 Compacto, poderoso e tão versátil quanto o Uno R3. A placa Arduino mais vendida e usada!</h1>
            <img src={arduino} alt="placa de arduino que junta todas as outras peças"/>
        </MainContainer>

    )
  }