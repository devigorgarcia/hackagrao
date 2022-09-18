import { Button, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const InitialPage = () => {
  const history = useHistory();

  const handlePlay = (route) => {
    history.push(`/${route}`);

  };
  return (
    <Flex>
      <Grid>
        <Heading>SimulaGrão</Heading>
        <Button onClick={() => handlePlay("objective")}>Iniciar</Button>
      </Grid>
    </Flex>
  );
};
