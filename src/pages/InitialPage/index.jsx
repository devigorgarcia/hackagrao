import { Button, Flex, Grid, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from "@chakra-ui/react";

export const InitialPage = () => {
  const history = useHistory();
  const [grao, setGrao] = useState(false);

  return (
    <Flex>
      <Grid>
        <Heading>SimulaGrão</Heading>
        <Text>Qual seu nome:</Text>
        <Input />
        <Text>Quer ajuda da Grão Direto?</Text>
        <Switch id="graoHelp" onChange={() => setGrao(!grao)} />
        {grao ? (
          <Button onClick={() => history.push("/gameg")}>Iniciar Jogo</Button>
        ) : (
          <Button onClick={() => history.push("/game")}>Iniciar </Button>
        )}
      </Grid>
    </Flex>
  );
};
