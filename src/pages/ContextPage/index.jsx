import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const ContextPage = () => {
  const history = useHistory();

  const handlePlay = (route) => {
    history.push(`/${route}`);

  };
  return (
    <Flex>
      <Grid>
        <Heading>Contexto</Heading>
        <Text>AAAA</Text>
        <Button onClick={() => handlePlay("tutorial")}>Iniciar </Button>
      </Grid>
    </Flex>
  );
};
