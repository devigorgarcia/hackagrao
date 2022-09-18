import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import Rocket from "../../assets/rocket 1.svg";
import First from "../../assets/image 19.svg";
import Second from "../../assets/image 20.svg";
import Third from "../../assets/image 21.svg";

export const RankingPage = () => {
  const history = useHistory();
  const listRanking = JSON.parse(localStorage.getItem("@Player"));

  listRanking.sort(function (a, b) {
    if (a.finalValue < b.finalValue) {
      return 1;
    }
    if (a.finalValue > b.finalValue) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  return (
    <Flex flexDir={"column"} justifyContent="center" alignItems={"center"}>
      <Text>Ranking!</Text>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            {listRanking.map((ranking, index) => {
              return (
                <Tr key={index}>
                  <Td>
                    <Image src={First} />
                  </Td>
                  <Td>
                    <strong>{ranking.name}</strong>
                    <Image src={Rocket} />
                  </Td>
                  <Td>
                    <strong>{ranking.finalValue}</strong>
                  </Td>
                </Tr>
              );
            })}

            {/* <Tr>
              <Td>
                <Image src={Second} />
              </Td>
              <Td>Vinicius</Td>
              <Td>125.750.400</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={Third} />
              </Td>
              <Td>
                Felipe <Image src={Rocket} />
              </Td>
              <Td>110.480.210</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => history.push("/")}
        bg={"green.300"}
        margin="198px  76px 77px"
        padding="25px 70px"
      >
        Fim{" "}
      </Button>
    </Flex>
  );
};
