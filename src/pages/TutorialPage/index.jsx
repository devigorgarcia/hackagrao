import { Button, Flex, Grid, Heading, Input, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from "@chakra-ui/react";

export const TutorialPage = () => {
  const history = useHistory();
  const [grao, setGrao] = useState(false);

  const handlePlay = (route) => {
    history.push(`/${route}`);

  };
  return (
    <Flex>
      <Grid>
        <Heading>Tutorial</Heading>
        <Text>AAAA</Text>
        <Switch id="graoHelp" onChange={() => setGrao(!grao)} />
        {grao ? (
          <Button onClick={() => handlePlay("recommendation")}>Iniciar JOGO</Button>
        ) : (
          <Button onClick={() => handlePlay("game")}>Iniciar </Button>
        )}
      </Grid>
    </Flex>
  );
};
