import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/Logo Hackagrão branca 1.svg";
import LogoGrao from "../../assets/Group 1.svg";

export const InitialPage = () => {
  const history = useHistory();

  const handlePlay = (route) => {
    history.push(`/${route}`);
  };
  return (
    <Flex flexDir={"column"} justifyContent="center" alignItems={"center"}>
      <Image src={LogoGrao} margin="37px 58px 58px"/>
      <Text margin={"95px 43px 43px "}>Para começar aperte o Play</Text>
      <Image margin="96px 27px 32px " src={Logo} />
      <Button padding="25px 70px" margin="197px 76px 77px 79px" bg={"green.300"} onClick={() => handlePlay("objective")}>Play </Button>
    </Flex>
  );
};
