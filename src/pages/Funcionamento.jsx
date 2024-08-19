import { Header } from "./Header";
import {
  FuncionalidadesContainer,
  FunctionContainer,
  MonitoramentoContainer,
  ParearContainer,
} from "../styles/Funcionamento.styles.js";
import explainimg from "../assets/explainimg.png";

export function Funcionamento() {
  return (
  
    <FunctionContainer>
      <Header activeItem="funcionamento" />
      <img src={explainimg} alt="Ilustração do SafeTrack" />
      <h2>
        Instruções de Uso do Dispositivo de Rastreamento e Monitoramento
        SafeTrack
      </h2>
      <ParearContainer>
        <div className="step">
          <div className="numero">1</div>
          <div>
            <h2>Parear com o Celular</h2>
            <p>
              Baixe o app SafeTrack. <br />
              Ative o Bluetooth do celular. <br />
              Siga as instruções no app para parear o dispositivo.
            </p>
          </div>
        </div>
      </ParearContainer>
      <MonitoramentoContainer>
        <div className="step">
          <div className="numero">2</div>
          <div>
            <h2>Monitoramento em tempo real</h2>
            <p>
              Receba notificações sobre a localização e status da bagagem. <br />
              Visualize a localização em tempo real no app. 
            </p>
          </div>
        </div>
      </MonitoramentoContainer>
      <FuncionalidadesContainer>
        <div className="step">
          <div className="numero">3</div>
          <div>
            <h2>Funcionalidades Adicionais</h2>
            <p>
              Consulte o histórico de localizações. Configure alertas de
              distância. <br />Acesse suporte técnico pelo app.
            </p>
          </div>
        </div>
      </FuncionalidadesContainer>
      <h2>Estas etapas garantem a configuração e uso eficaz do SafeTrack. </h2>
    </FunctionContainer>
  );
}
