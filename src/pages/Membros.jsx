import { PrimContainer, HeadContainer, MainContainer, NickContainer, MotaContainer, LeoContainer, AlanContainer, TitleContainer } from "../styles/Membros.styles.js"
import {Header} from "./Header"
import leo_foto from "../assets/leo.png"
import mota_foto from "../assets/mota.png"
import nicolau_foto from "../assets/nicolau.png"
import alan_foto from "../assets/alan.png"
import linkedin from "../assets/linkedin.png"




export function Membros() {
  return (
    <PrimContainer>
      <HeadContainer>
        < Header activeItem="equipe"/>
      </HeadContainer>
      <TitleContainer>
          <h1>Membros</h1>
        </TitleContainer>
      <MainContainer>
        <NickContainer>
          <img src= {nicolau_foto} alt="" />
          <h2>Nicollas Gomes</h2>
          <div>
          <img src= {linkedin} alt="" className="link"/>
          <a href="https://www.linkedin.com/in/nicollas-gomes-4479952b9/" target="_blank">Nicollas Gomes</a>
          </div>
        </NickContainer>
        <MotaContainer>
          <img src= {mota_foto} alt="" />
          <h2>Guilherme Mota</h2>
          <div>
          <img src= {linkedin} alt="" className="link" />
          <a href="https://www.linkedin.com/in/guilherme-mota-melo/" target="_blank">Guilherme Mota</a>
          </div>
        </MotaContainer>
        <LeoContainer>
          <img src= {leo_foto} alt="" />
          <h2>Leonardo Amaral</h2>
          <div>
          <img src= {linkedin} alt="" className="link" />
          <a href="https://www.linkedin.com/in/leonardo-amaral-356b602b9/" target="_blank">Leonardo Amaral</a>
          </div>
        </LeoContainer>
        <AlanContainer>
          <img src= {alan_foto} alt="" />
          <h2>Alan Cechi</h2>
          <div>
          <img src= {linkedin} alt="" className="link" />
          <a href="https://www.linkedin.com/" target="_blank">Alan Cechi</a>
          </div>
        </AlanContainer>
      </MainContainer>
    </PrimContainer>
  )
}
