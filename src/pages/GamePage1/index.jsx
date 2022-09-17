import { Flex, Grid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ScenarioContext } from "../../contexts/ScenarioContext";

export const GamePage = () => {
  const { scenario } = useContext(ScenarioContext);
  console.log(scenario)
  return (
    <Flex>
      <Grid>
        <Text></Text>
      </Grid>
    </Flex>
  );
};
