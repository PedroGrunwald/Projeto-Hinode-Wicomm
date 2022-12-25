import { StyledHeaderAll, StyledContainerTopHeader,StyledH4,StyledConsultor,StyledContainerMiddleHeader,StyledNav,StyledLinkNav } from "./style";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagFill } from "react-icons/bs";
import {GoSearch} from "react-icons/go"
import {AiOutlineMenu} from "react-icons/ai"
import Hinode from "../../assets/Hinode.svg";

function Header() {
  return (
    <StyledHeaderAll>
      <StyledContainerTopHeader>
        <StyledH4>A empresa</StyledH4>
        <BsPersonFill/>
        <StyledConsultor>Seja um consultor</StyledConsultor>
        <p>Fale conosco</p>
      </StyledContainerTopHeader>
      <StyledContainerMiddleHeader>
        <img src={Hinode} alt="logo hinode" />
    <div>
       <input type="search" placeholder="Busque aqui seu produto de interesse"/>
       <a href="#"><GoSearch/></a>
    </div>
        <p>Olá Visitante</p>
        <p>ENTRE OU CADASTRE-SE</p>
        <AiOutlineHeart />
        <p>FAVORITOS</p>
        <BsBagFill />
        <p>SACOLA</p>
      </StyledContainerMiddleHeader>
      <StyledNav>
        <a href="#">
          <AiOutlineMenu />
          Todas as categorias
        </a>
        <StyledLinkNav href="#">FRAGRÂNCIAS</StyledLinkNav>
        <StyledLinkNav href="#">MAQUIAGEM</StyledLinkNav>
        <StyledLinkNav href="#">CORPO & BANHO</StyledLinkNav>
        <StyledLinkNav href="#">VIDA SAUDÁVEL</StyledLinkNav>
        <StyledLinkNav href="#">ENERGIA E PERFORMANCE</StyledLinkNav>
      </StyledNav>
    </StyledHeaderAll>
  );
}

export default Header;
