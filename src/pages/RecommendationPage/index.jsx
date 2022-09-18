import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const RecommendationPage = () => {
  const history = useHistory();

  return (
    <Flex>
      <Grid>
        <Heading>Recomendação</Heading>
        <Text>AAAA</Text>
        <Button onClick={() => history.push("/playerPage")}>Continuar </Button>
      </Grid>
    </Flex>
  );
};
