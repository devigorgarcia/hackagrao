import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const ObjectivePage = () => {
  const history = useHistory();

  const handlePlay = (route) => {
    history.push(`/${route}`);

  };
  return (
    <Flex>
      <Grid>
        <Heading>Objetivo do Jogo</Heading>
        <Text>AAAA</Text>
        <Button onClick={() => handlePlay("context")}>Iniciar </Button>
      </Grid>
    </Flex>
  );
};
