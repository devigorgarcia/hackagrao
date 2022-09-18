import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import Imagem1 from "../../assets/image 1.svg";
import ContextoImg from "../../assets/Group 7.svg";

export const ContextPage = () => {
  const history = useHistory();

  return (
    <Flex flexDir={"column"} justifyContent="center" alignItems={"center"}>
      <Image src={Imagem1} margin="55px 109px 109px"/>
      <Image src={ContextoImg} margin="55px 58px 58px" />
      <Text margin="49px 25px 25px">
        Você é um produtor rural que colheu 300.000 sacas de soja e passa por um
        dilema: vender ou reter a saca e esperar o proximo cenário.{" "}
      </Text>
      <Button onClick={() => history.push("/tutorial")} bg={"green.300"} margin="198px  76px 77px" padding="25px 70px">Continuar </Button>
    </Flex>
  );
};
