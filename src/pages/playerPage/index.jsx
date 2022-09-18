import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from "@chakra-ui/react";
import { ScenarioContext } from "../../contexts/ScenarioContext";
import { SaleContext } from "../../contexts/SaleContext";
import logoImg from "../../assets/Logo Hackagrão branca1.svg";
import PlayerIcon from "../../assets/playerPageIcon.svg";
export const PlayerPage = () => {
  const history = useHistory();
  const { randomScenario } = useContext(ScenarioContext);
  const { setName, grao, setGrao } = useContext(SaleContext);

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
      <Flex
        flexDir={["column", "column", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Image src={logoImg} />
        <Image boxSize={'30%'} alt='Player Icon' src={PlayerIcon} padding="2.25rem 0 5rem 0" />
        <Stack w={"100%"} paddingBottom="4.4rem">
          <Text fontSize={"20px"} alignSelf={"flex-start"}>
            Qual seu nome:
          </Text>
          <Input fontWeight={'bold'} color={'orange.600'} bg={"white"} onChange={(e) => setName(e.target.value)} />
        </Stack>
        <Text fontSize={"20px"} as={"b"}>
          Quer ajuda da{" "}
          <Text color={"green.300"} as="b">
            Grão Direto?
          </Text>
        </Text>
        <Switch
          size={"lg"}
          colorScheme="green"
          padding={"1rem 0 3rem 0"}
          id="graoHelp"
          onChange={() => setGrao(!grao)}
        />
        {grao ? (
          <Button
            w={"60%"}
            h={"58px"}
            bg="green.300"
            onClick={() => handlePlay("/recommendation")}
          >
            Iniciar Jogo
          </Button>
        ) : (
          <Button
            w={"60%"}
            h={"58px"}
            bg="green.300"
            onClick={() => handlePlay("/gamePage1")}
          >
            Iniciar Jogo{" "}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
