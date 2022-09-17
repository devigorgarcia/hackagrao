import { Button, Flex, Grid, Heading, Input, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from "@chakra-ui/react";
import { ScenarioContext } from "../../contexts/ScenarioContext";
import { SaleContext } from "../../contexts/SaleContext";

export const PlayerPage = () => {
  const history = useHistory();
  const [grao, setGrao] = useState(false);
  const { scenario, randomScenario } = useContext(ScenarioContext);
  const {setName} = useContext(SaleContext)

  const handlePlay = (route) => {
    randomScenario()
    history.push(`/${route}`);
  };
  return (
    <Flex>
      <Grid>
        <Heading>SimulaGrão</Heading>
        <Text>Qual seu nome:</Text>
        <Input onChange={(e)=> setName(e.target.value)} />
        <Text>Quer ajuda da Grão Direto?</Text>
        <Switch id="graoHelp" onChange={() => setGrao(!grao)} />
        {grao ? (
          <Button onClick={() => handlePlay("gameg")}>Iniciar Jogo</Button>
        ) : (
          <Button onClick={() => handlePlay("game1")}>Iniciar </Button>
        )}
      </Grid>
    </Flex>
  );
};
