import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from "@chakra-ui/react";
import { ScenarioContext } from "../../contexts/ScenarioContext";
import { SaleContext } from "../../contexts/SaleContext";
import logoImg from "../../assets/Logo Hackagrão branca.svg";
import PlayerIcon from "../../assets/playerPageIcon.svg";
export const PlayerPage = () => {
  const history = useHistory();
  const [grao, setGrao] = useState(false);
  const { randomScenario } = useContext(ScenarioContext);
  const { setName } = useContext(SaleContext);

  const handlePlay = (route) => {
    randomScenario();
    history.push(`${route}`);
  };
  return (
    <Flex
      flexDir={"column"}
      justifyContent="center"
      align={"center"}
      paddingTop="1.5rem"
    >
      <Flex flexDir={["column", "column", "row"]} justifyContent="center" alignItems="center">
        <Image src={logoImg} />
        <Image src={PlayerIcon} padding />
        <Text>Qual seu nome:</Text>
        <Input onChange={(e) => setName(e.target.value)} />
        <Text>Quer ajuda da Grão Direto?</Text>
        <Switch id="graoHelp" onChange={() => setGrao(!grao)} />
        {grao ? (
          <Button bg="green.300" onClick={() => handlePlay("/recommendation")}>
            Iniciar Jogo
          </Button>
        ) : (
          <Button onClick={() => handlePlay("/gamePage1")}>Iniciar </Button>
        )}
      </Flex>
    </Flex>
  );
};
