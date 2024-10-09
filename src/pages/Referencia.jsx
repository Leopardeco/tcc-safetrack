import {
    ReferencesContainer,
    ReferencesGrid,
    ReferenceCard,
    HeadContainer
    
  } from "../styles/Referencia.styles";
  
  import { Header } from "./Header";
  
  export const Referencia = () => {
    return (
      <>
        <HeadContainer>
          <Header activeItem="referencia" />
        </HeadContainer>
        <ReferencesContainer>
          <h1>Referências Bibliográficas</h1>
          <ReferencesGrid>
          <ReferenceCard>
            <p><strong>PIRES, Marienne.</strong> Segurança malas de viagem: tudo o que você precisa saber. Euro Dicas, 2023.</p>
          </ReferenceCard>

          <ReferenceCard>
            <p><strong>MARTINS, Bianca.</strong> Como proteger bagagem no aeroporto e evitar o golpe da cesárea. Apure Guria, 2022.</p>
          </ReferenceCard>

          <ReferenceCard>
            <p><strong>GOMES, Rafael.</strong> Dicas para proteger sua mala nos aeroportos. Check List de Viagem, 2023.</p>
          </ReferenceCard>

          <ReferenceCard>
            <p><strong>FREITAS, Bruno.</strong> Segurança na viagem de avião: como evitar complicações com a bagagem. JC NE10, 2023.</p>
          </ReferenceCard>

          <ReferenceCard>
            <p><strong>SILVA, Juliana.</strong> Proteção de bagagens: dicas essenciais para evitar furtos. Viagem Segura, 2023.</p>
          </ReferenceCard>

          </ReferencesGrid>
        </ReferencesContainer>
      </>
    );
  };