import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ProductModal } from "../../components/ProductModal";
import { SaleContext } from "../../contexts/SaleContext";
import coinIcon from "../../assets/coinIcon.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
export const FeedbackPage = () => {
  const { name, person } = useContext(SaleContext);

  return (
    <Flex flexDir={"column"}>
      <Heading fontSize={"22px"} as={"h2"}>
        {name}!
      </Heading>
      <Flex>
        <Image src={coinIcon} />
        <Text>
          Seu rendimento foi de <Text as={"b"}>R$ {person.finalValue}</Text>
        </Text>
      </Flex>
      <Flex wrap={'wrap'} w='80%' alignItems={'center'} justifyContent='center'>
        <ProductModal title={"Venda Fácil"} image={icon1}>
          Ferramenta digital para que o vendedor de grãos, ao tomar a decisão de
          negociar, possa se conectar aos compradores da sua rede de contatos de
          uma só vez.
        </ProductModal>
        <ProductModal title={"Negociação 5 Estrelas"} image={icon2}>
          Negocie sem dor de cabeça com o suporte dos nossos consultores de
          mercado.
        </ProductModal>
        <ProductModal title={"GD VIP Corporate"} image={icon3}>
          Empodere seus times internos e parceiros do agronegócio. Preços do
          mercado físico, análises e informações exclusivas todos os dias na
          palma da mão.
        </ProductModal>
        <ProductModal title={"Gestão de Contratos"} image={icon4}>
          Gerencie por completo todos os documentos das suas negociações e
          potencialize a gestão com o uso do contrato digital.
        </ProductModal>
      </Flex>
    </Flex>
  );
};
