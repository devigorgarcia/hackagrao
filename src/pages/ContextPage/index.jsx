import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const ContextPage = () => {
  const history = useHistory();

  return (
    <Flex>
      <Grid>
        <Heading>Contexto</Heading>
        <Text></Text>
        <Button onClick={() => history.push("/tutorial")}>Continuar </Button>
      </Grid>
    </Flex>
  );
};
