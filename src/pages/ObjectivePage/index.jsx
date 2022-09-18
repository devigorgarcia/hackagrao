import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const ObjectivePage = () => {
  const history = useHistory();

  return (
    <Flex>
      <Grid>
        <Heading>Objetivo do Jogo</Heading>
        <Text>AAAA</Text>
        <Button onClick={() => history.push("/context")}>Continuar </Button>
      </Grid>
    </Flex>
  );
};
