import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import Recommendation from "../../assets/Recommendation.svg";
import RecommendationImg from "../../assets/Benefits.svg";

export const RecommendationPage = () => {
  const history = useHistory();

  const handlePlay = (route) => {
    history.push(`/${route}`);
  };
  return (
    <Flex flexDir={"column"} justifyContent="center" alignItems={"center"}>
      <Image src={Recommendation} margin="55px 109px 109px" />
      <Image src={RecommendationImg} margin="55px 58px 58px" />
      <Text>
        Consultoria com melhores expecialistas mercado. <br />
        Desburocratização do pós-negociação. <br />
        Acompanhamento logístico. <br />
        Venda dos grãos em poucos minutos. <br />
      </Text>
      <Button onClick={() => history.push("/gamePageGD1")} bg={"green.300"} margin="242px  76px 77px" padding="25px 70px">Continuar </Button>
    </Flex>
  );
};
