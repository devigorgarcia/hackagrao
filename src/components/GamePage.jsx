import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SaleContext } from "../contexts/SaleContext";
import { ScenarioContext } from "../contexts/ScenarioContext";
import StorageIcon from "../assets/storargeIcon.svg";
import scenarioIcon from "../assets/scenarioIcon.svg";
import { GoCheck } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
// import question-mark from "../assets/question-mark.svg";
import { HelpModal } from "./HelpModal";

export const GamePage = ({ page }) => {
  const { scenario, randomScenario } = useContext(ScenarioContext);
  const { name, storage, valuesAmount, grao } = useContext(SaleContext);

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [sale, setSale] = useState(false);
  const [amount, setAmount] = useState(0);

  const history = useHistory();

  console.log(scenario)
  const handleInput = (bags) => {
    if (bags === 0 || bags > storage) {
      setError(true);
      setErrorMsg("Quantidade Invalida");
    } else {
      setError(false);
      valuesAmount(bags, scenario.value);
      randomScenario()
      if (storage === 0) {
        history.push("/feedback");
      }
      history.push(`${page}`);
    }
  };



  return (
    <Flex flexDir={"column"} padding="1.7rem ">
      <Flex gap={"1rem"}>
        <Flex flexDir={"column"} width="100%" gap="1rem">
          <Heading as="h2" fontSize={"25px"}>
            Olá, {name}
          </Heading>

          <Flex
            alignItems="center"
            border={"1px solid white"}
            borderRadius="10px"
            padding={"0.5rem"}
            justifyContent="center"
            width={"90%"}
          >
            <Image w={"24px"} src={StorageIcon} />
            <Text as="b" ml={"1rem"} size={"20px"}>
              {storage.toLocaleString("pt-BR")} sacas
            </Text>
          </Flex>
        </Flex>
        {grao && (
          <Flex
            flexDir={"column"}
            gap={"1rem"}
            alignItem="center"
            justifyContent={"center"}
            width="100%"
          >
            <Text align={"center"} fontSize={"15px"}>
              Você quer uma ajuda?
            </Text>
            <HelpModal title={"Dica"} tips={scenario.tip}>{scenario.reason}</HelpModal>
          </Flex>
        )}
      </Flex>

      <Flex
        flexDir={"column"}
        paddingTop={"5.5rem"}
        justifyContent="center"
        alignItems={"center"}
        gap="2rem"
      >
        <Image src={scenarioIcon} />
        <Text lineHeight={"170%"} mt={"1rem"}>
          {scenario?.content}
        </Text>
        <Box
          border={"1px solid white"}
          borderRadius={"4px"}
          padding="10px"
          marginBottom={"3rem"}
        >
          <Text fontSize={"24px"}>
            O valor da Saca: <Text as="b">R$ {scenario.value}</Text>
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
        width={"100%"}
      >
        <Box>
          <ButtonGroup>
            <Button
              leftIcon={<GoCheck size={"20px"} />}
              w={"50%"}
              h={"37px"}
              bg="green.300"
              color={"black"}
              borderRadius={"20px"}
              onClick={() => setSale(true)}
            >
              Vender
            </Button>
            <Button
              leftIcon={<IoCloseSharp size={"20px"} />}
              w={"50%"}
              h={"37px"}
              bg="#C63F3F"
              borderRadius={"20px"}
              color={"black"}
              onClick={() => {
                randomScenario()
                return history.push(`${page}`)
              }}
            >
              Não Vender
            </Button>
          </ButtonGroup>
        </Box>
        {sale && (
          <Flex paddingTop={"3.125rem"} flexDir={"column"} gap={"1rem"}>
            <Text fontSize={"20px"}>Quantas sacas deseja vender?</Text>
            <Input
              h={"58px"}
              bg="white"
              color="orange.300"
              fontWeight={"bold"}
              type={"number"}
              onChange={(e) => setAmount(e.target.value)}
            />
            {error && (
              <Text fontWeight="bold" color="#C63F3F">
                {errorMsg}
              </Text>
            )}
            <Button
              mt={"3rem"}
              h={"58px"}
              filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}
              bg="green.300"
              onClick={() => handleInput(+amount)}
            >
              Confirmar Venda
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
