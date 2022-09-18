import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import ImagemTuto from "../../assets/image 3.svg"
import TutorialImg from "../../assets/Group 6.svg"

export const TutorialPage = () => {
  const history = useHistory();

  return (
    <Flex flexDir={"column"} justifyContent="center" alignItems={"center"}>
      <Image src={ImagemTuto} margin="55px 109px 109px"/>
      <Image src={TutorialImg} margin="55px 76px 58px"/>
      <Text margin="55px 25px 25px">
        {" "}
        O jogador, baseando-se na situação exposta em cada rodada, deve decidir
        se quer ou não vender sua safra. <br />
        Caso opte por vender, clique no botão VENDER e informe o quanto de sua
        safra quer vender. <br /> Caso opte por não vender, escolha a opção NÃO
        VENDER.
      </Text>
      <Button onClick={() => history.push("/playerPage")} bg={"green.300"} margin="198px  76px 77px" padding="25px 70px">Continuar </Button>
    </Flex>
  );
};
