import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const TutorialPage = () => {
  const history = useHistory();

  return (
    <Flex>
      <Grid>
        <Heading>Tutorial</Heading>
        <Text>AAAA</Text>
        <Button onClick={() => history.push("/playerPage")}>Continuar</Button>
      </Grid>
    </Flex>
  );
};
