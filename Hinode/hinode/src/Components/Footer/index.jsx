import Image from "../../assets/RecebA nossas ofertas e novidades.svg";
import Alert from "../../assets/AlertHinode.svg"
import {BsInstagram} from "react-icons/bs"
import {ImFacebook} from "react-icons/im"
import {RiYoutubeLine} from "react-icons/ri"
import {StyledFooter,StyledSectiontop,StyledForm,StyledInput,StyledButton} from "./style"

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
<section>
    <div>
        <nav>
            <li>GRUPO HINODE</li>
            <li>A EMPRESA</li>
            <li>Catalogo Hinode</li>
            <li>Seja um consultor</li>
            <li>Hinode Prime</li>
            <li>Frete inteligente</li>
        </nav>

        <nav>
            <li>MAIS VENDIDOS</li>
            <li>Corps Lígnea Body Contour Gel Modelador</li>
            <li>Shake de Vanilla H+ HND</li>
            <li>Shake de Morango H+ HND</li>
            <li>Luva de Silicone Creme para as Mãos Hands</li>
            <li>Empire Gold</li>
            <li>Empire VIP</li>
        </nav>

        <nav>
            <li>DÚVIDAS FREQUENTES</li>
            <li>Fale Conosco</li>
            <li>Entrega, Trocas e Devoluções</li>
            <li>Compra e Venda</li>
            <li>Política de Privacidade</li>
            <li>Remover Consentimento</li>
        </nav>

        <nav>
            <li><button>CENTRAL DE ATENDIMENTO</button></li>
            <li><p>De segunda a sexta das 9h às 21h Capitas e regiões metropolitanas 4020-2424 Demais localidades: 0800-144-6633</p></li>
            <li></li>
         <div>
            <BsInstagram/>
            <RiYoutubeLine/>
            <ImFacebook/>
         </div>
        </nav>
    </div>
</section>
<img src={Alert} alt="regras hinode" />
    </StyledFooter>
  );
};

export default Footer
