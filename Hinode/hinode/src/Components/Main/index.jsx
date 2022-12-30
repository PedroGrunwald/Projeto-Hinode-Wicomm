import GirlMakeUp from "../../assets/GirlMake.svg"
import Left from "../../assets/left.svg"
import Right from "../../assets/right.svg"
import Product from "../../assets/productTop.svg"
import Promocao from "../../assets/Promocao.svg"
import {StyledSectionTop} from "./styles"
export const Main = () =>{
    return (
      <main>
      <StyledSectionTop className="main__top">
      <div className="main__top-adversting">
        <img src={GirlMakeUp} alt="" />
        <div>
          <p className="title__font-Playfair"> Base Líquida DAZZLE</p>
          <button>Comprar</button>
        </div>

        <div>
          <img src={Left} alt="" />
          <img src={Right} alt="" />
        </div>
        <img className="main_top-dotted" src={Product} alt="" />
      </div>
      <img src={Promocao} alt="" />
    </StyledSectionTop>
    </main>
    )
}
export default Main