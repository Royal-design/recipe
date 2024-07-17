import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { dataType } from "../mainPageComp/MainPageDetails";
import { useState } from "react";

export const RecipeDetails = ({ data }: dataType) => {
  const [servingNumber, setSevingNumber] = useState(data?.servings);
  const increaseServingClick = () => {
    if (servingNumber !== 0) setSevingNumber((prev) => prev + 1);
  };

  const decreaseServingClick = () => {
    if (servingNumber !== 1) setSevingNumber((prev) => prev - 1);
  };
  return (
    <div className="">
      {data && (
        <Box display={"flex"} justifyContent={"center"} marginTop={"2rem"}>
          <Card width={"50rem"}>
            <CardHeader>
              <Flex justifyContent={"space-between"}>
                <Tag fontSize={"1rem"} padding={"0.4rem"} rounded={"full"}>
                  <Text
                    textAlign={"center"}
                    background={"#F4A261"}
                    padding={"0.2rem"}
                    width={"2rem"}
                    rounded={"full"}
                    marginRight={"0.5rem"}
                  >
                    {servingNumber}
                  </Text>
                  {data?.servings > 1 ? "Servings" : "Serving"}
                </Tag>
                <Tag fontSize={"1rem"} padding={"0.4rem"} rounded={"full"}>
                  <Text
                    textAlign={"center"}
                    background={"#F4A261"}
                    padding={"0.2rem"}
                    rounded={"full"}
                    marginRight={"0.5rem"}
                  >
                    {(data?.cooking_time / data?.servings) * servingNumber}mins
                  </Text>
                  Cooking Time
                </Tag>

                <Flex alignItems={"center"} fontSize={"1rem"}>
                  <Button onClick={decreaseServingClick}>-</Button>
                  <Text>Servings</Text>
                  <Button onClick={increaseServingClick}>+</Button>
                </Flex>
              </Flex>
            </CardHeader>

            <Divider />

            <CardBody>
              <Text
                textAlign={"center"}
                fontSize={"1.3rem"}
                fontWeight={"bolder"}
              >
                Recipe Details
              </Text>
              <TableContainer marginTop={"1rem"}>
                <Table size={"sm"} width={"100%"}>
                  <Thead>
                    <Tr
                      display={"flex"}
                      justifyContent={"center"}
                      width={"100%"}
                    >
                      <Th width={"20%"}>Quantity</Th>
                      <Th width={"10%"}>Unit</Th>
                      <Th width={"70%"}>Description</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.ingredients.map((ing, i) => (
                      <Tr
                        key={i}
                        display={"flex"}
                        justifyContent={"center"}
                        width={"100%"}
                      >
                        <Td width={"20%"}>
                          {(ing.quantity / data?.servings) * servingNumber}
                        </Td>
                        <Td width={"10%"}>{ing?.unit ? ing.unit : "null"}</Td>
                        <Td width={"70%"} flexWrap={"wrap"}>
                          {ing.description}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
            <CardFooter>
              <Flex width={"100%"} justifyContent={"space-between"}>
                <Tag rounded={"full"}>
                  Publisher
                  <Text
                    marginLeft={"1rem"}
                    background={"#F4A261"}
                    padding={"0.5rem"}
                    rounded={"full"}
                  >
                    {" "}
                    {data?.publisher}
                  </Text>
                </Tag>

                <Text>
                  <Button>
                    <Link target="_blank" to={data?.source_url}>
                      Source
                    </Link>
                  </Button>
                </Text>
              </Flex>
            </CardFooter>
          </Card>
        </Box>
      )}
    </div>
  );
};
