import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import Imagem from "../../assets/image 11.svg";
import Objetivo from "../../assets/Group 7.svg";

export const ObjectivePage = () => {
  const history = useHistory();

  return (
    <Flex flexDir={"column"} justifyContent="center" alignItems={"center"}>
        <Image width={"124px"} margin="55px 109px 110px" src={Imagem}/>
        <Image margin="55px 37px 37px" src={Objetivo}/>
        <Text margin="49px 25px 25px">Simular um período de vendas que auxilie o produtor em seu planejamento.</Text>
        <Button onClick={() => history.push("/context")} bg={"green.300"} margin="242px  76px 77px" padding="25px 70px">Continuar </Button>
    </Flex>
  );
};
