import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SaleContext } from "../contexts/SaleContext";
import { ScenarioContext } from "../contexts/ScenarioContext";

export const GamePage = ({ page }) => {
  const { scenario } = useContext(ScenarioContext);
  const { name, storage, valuesAmount } = useContext(SaleContext);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [sale, setSale] = useState(false);
  const [amount, setAmount] = useState(0);

  const history = useHistory();

  const handleInput = (sacks) => {
    if (sacks === 0) {
      setError(true);
      setErrorMsg("Quantidade Invalida");
    }
    if (sacks > storage) {
      setError(true);
      setErrorMsg("Quantidade acima da disponivel ou Valor Indisponivel");
    }

    setError(false);
    valuesAmount(sacks, scenario.value);
    if (storage === 0) {
      // history.push('/feedback')
    }
    console.log(page)
    history.push(`/gamePage${page}`);
  };

  return (
    <Flex flexDir={"column"}>
      <Grid>
        <Stack spacing={4}>
          <Heading as="h1">Olá, {name}</Heading>
          <Heading size={"md"} as={"h3"}>
            A quantidade de sacas que você possui é{" "}
            {storage.toLocaleString("pt-BR")} sacas
          </Heading>
        </Stack>
        <Text mt={"1rem"}>
          {scenario?.content}
          <strong> R${scenario?.value?.toFixed(2)}</strong>
        </Text>
      </Grid>
      <Flex flexDirection={"column"}>
        <Box>
          <ButtonGroup>
            <Button onClick={() => setSale(true)}>Vender</Button>
            <Button>Não Vender</Button>
          </ButtonGroup>
        </Box>
        {sale && (
          <Flex flexDir={"column"}>
            <Text>Quantas sacas deseja vender?</Text>
            <Input
              type={"number"}
              onChange={(e) => setAmount(e.target.value)}
            />
            {error && <>{errorMsg}</>}
            <Button onClick={() => handleInput(+amount)}>
              Confirmar Venda
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
