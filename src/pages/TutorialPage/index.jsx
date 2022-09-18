import { Button, Flex, Grid, Heading, Input, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from "@chakra-ui/react";

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
