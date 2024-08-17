import { Header } from "./Header";
import {
  FuncionalidadesContainer,
  MainContainer,
  MonitoramentoContainer,
  ParearContainer,
} from "../styles/Funcionamento.styles.js";
import explainimg from "../assets/explainimg.png";

export function Funcionamento() {
  return (
    <MainContainer>
      <Header activeItem="funcionamento" />
      <img src={explainimg} alt="" />
      <h2>
        Instruções de Uso do Dispositivo de Rastreamento e Monitoramento
        SafeTrack
      </h2>
      <ParearContainer>
        <h2>1</h2>
        <h2>Parear com o Celular</h2>
        <p>
          Baixe o app SafeTrack. Ative o Bluetooth do celular. Siga as
          instruções no app para parear o dispositivo.
        </p>
      </ParearContainer>
      <MonitoramentoContainer>
        <h2>2</h2>
        <h2>Monitoramento em tempo real</h2>
        <p>
          Consulte o histórico de localizações. Configure alertas de distância.
          Acesse suporte técnico pelo app.
        </p>
      </MonitoramentoContainer>
      <FuncionalidadesContainer>
        <h2>3</h2>
        <h2>Funcionalidades Adicionais</h2>
        <p>
          Consulte o histórico de localizações. Configure alertas de distância.
          Acesse suporte técnico pelo app.
        </p>
      </FuncionalidadesContainer>
      <h2>Estas etapas garantem a configuração e uso eficaz do SafeTrack. </h2>
    </MainContainer>
  );
}
