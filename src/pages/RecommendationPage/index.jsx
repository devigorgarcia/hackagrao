import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const RecommendationPage = () => {
  const history = useHistory();

  const handlePlay = (route) => {
    history.push(`/${route}`);

  };
  return (
    <Flex>
      <Grid>
        <Heading>Recomendação</Heading>
        <Text>AAAA</Text>
        <Button onClick={() => handlePlay("game")}>Continuar </Button>
      </Grid>
    </Flex>
  );
};
