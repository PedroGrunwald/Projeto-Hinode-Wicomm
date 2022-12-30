import Image from "../../assets/RecebA nossas ofertas e novidades.svg";
import Alert from "../../assets/AlertHinode.svg"
import {BsInstagram} from "react-icons/bs"
import {ImFacebook} from "react-icons/im"
import {RiYoutubeLine} from "react-icons/ri"
import {StyledFooter,StyledSectiontop,StyledForm,StyledInput,StyledButton,StyledSectionCenter,StyledContainerCenter,StyledNavCenter,StyledListFirst,StyledList,StyledLiBtn,StyledParagrahy,StyledContainerSocial} from "./style"

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSectiontop>
        <StyledForm>
          <img src={Image} alt="Receba nossas ofertas" />
          <StyledInput type="text" placeholder="Digite seu nome" />
          <StyledInput type="text" placeholder="Digite seu email" />
          <StyledButton type="submit">CADASTRAR</StyledButton>
        </StyledForm>
      </StyledSectiontop>
<StyledSectionCenter>
    <StyledContainerCenter>
        <StyledNavCenter>
            <StyledListFirst>GRUPO HINODE</StyledListFirst>
            <StyledList>A EMPRESA</StyledList>
            <StyledList>Catalogo Hinode</StyledList>
            <StyledList>Seja um consultor</StyledList>
            <StyledList>Hinode Prime</StyledList>
            <StyledList>Frete inteligente</StyledList>
        </StyledNavCenter>

        <StyledNavCenter>
            <StyledListFirst>MAIS VENDIDOS</StyledListFirst>
            <StyledList>Corps Lígnea Body Contour Gel Modelador</StyledList>
            <StyledList>Shake de Vanilla H+ HND</StyledList>
            <StyledList>Shake de Morango H+ HND</StyledList>
            <StyledList>Luva de Silicone Creme para as Mãos Hands</StyledList>
            <StyledList>Empire Gold</StyledList>
            <StyledList>Empire VIP</StyledList>
        </StyledNavCenter>

        <StyledNavCenter>
            <StyledListFirst>DÚVIDAS FREQUENTES</StyledListFirst>
            <StyledList>Fale Conosco</StyledList>
            <StyledList>Entrega, Trocas e Devoluções</StyledList>
            <StyledList>Compra e Venda</StyledList>
            <StyledList>Política de Privacidade</StyledList>
            <StyledList>Remover Consentimento</StyledList>
        </StyledNavCenter>

        <StyledNavCenter>
            <StyledLiBtn>CENTRAL DE ATENDIMENTO</StyledLiBtn>
            <StyledParagrahy>De segunda a sexta das 9h às 21h Capitas e regiões metropolitanas 4020-2424 Demais localidades: 0800-144-6633</StyledParagrahy>
         <StyledContainerSocial>
            <BsInstagram/>
            <RiYoutubeLine/>
            <ImFacebook/>
         </StyledContainerSocial>
        </StyledNavCenter>
    </StyledContainerCenter>
</StyledSectionCenter>
<img src={Alert} alt="regras hinode" />
    </StyledFooter>
  );
};

export default Footer
