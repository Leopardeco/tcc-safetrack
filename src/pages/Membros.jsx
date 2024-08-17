import { PrimContainer, HeadContainer, MainContainer, NickContainer, MotaContainer, LeoContainer, AlanContainer } from "../styles/Membros.styles.js"
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
      <MainContainer>
        <NickContainer>
          <img src= {nicolau_foto} alt="" />
          <h2>Nicollas Gomes</h2>
          <img src= {linkedin} alt="" className="link"/>
          <a className= "link" href="https://www.linkedin.com/in/nicollas-gomes-4479952b9/">Nicollas Gomes</a>
        </NickContainer>
        <MotaContainer>
          <img src= {mota_foto} alt="" />
          <h2>Guilherme Mota</h2>
          <img src= {linkedin} alt="" className= "link"/>
          <a className= "link" href="https://www.linkedin.com/in/guilherme-mota-melo/">Guilherme Mota</a>
        </MotaContainer>
        <LeoContainer>
          <img src= {leo_foto} alt="" />
          <h2>Leonardo Amaral</h2>
          <img src= {linkedin} alt="" className= "link"/>
          <a className= "link" href="https://www.linkedin.com/in/leonardo-amaral-356b602b9/">Leonardo Amaral</a>
        </LeoContainer>
        <AlanContainer>
          <img src= {alan_foto} alt="" />
          <h2>Alan Cechi</h2>
          <img src= {linkedin} alt="" className= "link"/>
          <a className= "link" href="">Alan Cechi</a>
        </AlanContainer>
      </MainContainer>
    </PrimContainer>
  )
}
