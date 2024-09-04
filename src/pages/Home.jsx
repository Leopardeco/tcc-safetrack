import { CardContainer, MainContainer, CopyContainer, PrepareContainer, ConectContainer, RateContainer, SectionMultiple, Conectdiv, CenteredContainer, Title} from "../styles/Home.styles.js"
import aeroporto from "../assets/aeroporto.png"
import bgComoUsar from "../assets/bgcomousar.png"
import {Header} from "./Header"
import avalie from "../assets/avalie.png"
import { useRef } from 'react';

export function Home() {
  
  const copyContainerRef = useRef(null);

  // Função para rolar suavemente para o CopyContainer
  const scrollToCopyContainer = () => {
    if (copyContainerRef.current) {
      copyContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <CardContainer>
      < Header activeItem={null}/>
        <MainContainer>
        <div className="text-button-container">
        <h1>Segurança <br />de Malas</h1>
        <a onClick={scrollToCopyContainer}>Saiba Mais</a>
        </div>
        <img src={aeroporto} alt="foto de um homem em um hall de aeroporto" />
      </MainContainer>
    <CopyContainer ref={copyContainerRef}>
        <h1>Imagine viajar com a 
        certeza de que suas malas estão
        sempre seguras e localizáveis.</h1>
        <p>O <span>Safetrack</span> é o dispositivo de rastreamento e acompanhamento de malas de 
        viagem oferece essa tranquilidade, permitindo que você se concentre  m 
        aproveitar sua jornada, mas ciente da situação da sua bagagem.</p>
    </CopyContainer>
    <PrepareContainer>
      <Title>Prepare-se para viajar</Title>
      <SectionMultiple>
        <section>
       
        <h2>1. Posicione o <br />
        SafeTrack</h2>
        <p>Coloque o dispositivo <br />
        SafeTrack dentro da<br />
        sua bagagem de mão<br />
        ou mala despachada.</p>
        </section>
        <section >
      
        <h2>2. Ligue o <br />
        SafeTrack</h2>
        <p>Ligue o dispositivo<br />
        SafeTrack pressionado<br />
        o botão liga/desliga.</p>
        </section>
        <section >

        <h2>3. Baixe o <br />
        Aplicativo</h2>
        <p>Baixe o aplicativo<br />
        Safetrackapp<br />
        gratuitamente na App<br />
        Store ou Google Play.</p>
        </section>
        <section>

        <h2>4. Abra o<br />
        Aplicativo</h2>
        <p>Abra o aplicativo<br />
        SafeTrackapp em seu<br />
        smartphone.</p>
        </section>
      </SectionMultiple>
    </PrepareContainer>
    <CenteredContainer>
      <ConectContainer>
        <h1>Conecte-se ao SafeTrack</h1>
        <Conectdiv>
          <div className="blue">
            <h2>Bluetooth</h2>  
            <p>Ative o Bluetooth em seu 
            smartphone.</p>
          </div>
          <div className="borda">
            <h2>Emparelhamento</h2>
            <p>O aplicativo SafeTrackApp irá procurar 
            automaticamente o
            dispositivo SafeTrack e 
            solicitar o emparelhamento.</p>
          </div>
          <div className="borda">
            <h2>Confirmação</h2>
            <p>Confirme o emparelhamento
            no aplicativo SafeTrackApp.</p>
          </div>
        </Conectdiv>
      </ConectContainer>
    </CenteredContainer>
    <RateContainer>
      <h1>Avalie-nos</h1>
      <p>Olá, Tester! Gostaríamos muito da sua ajuda para avaliar o nosso site Safe Track. Seu feedback é essencial para melhorarmos e oferecermos uma experiência ainda melhor. Visite o Safe Track e compartilhe suas impressões conosco. Sua opinião faz toda a diferença! Agradecemos desde já pela sua contribuição.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9q5HVgD9xndb_w-Pv_R2JLdimY7jIXMdTU4TK6CcPK39ABw/viewform" target="_blank">Formulário</a>
    </RateContainer>
    </CardContainer>
    
  )
}
