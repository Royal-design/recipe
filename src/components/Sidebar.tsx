import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  List,
  Stack,
  StackDivider,
  Text
} from "@chakra-ui/react";
import { ItemList } from "./ItemList";
import { UseMenuHook } from "../hooks/UseMenuHook";
import { useState } from "react";

import { SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  WarningIcon
} from "@chakra-ui/icons";

export const Sidebar = () => {
  const { data, isLoading, error, query } = UseMenuHook();
  const [page, setPage] = useState(1);
  const resultsPerPage = 10;
  const start = (page - 1) * resultsPerPage;

  const end = page * resultsPerPage;
  const handleNextClick = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    if (page !== 0) setPage((prev) => prev - 1);
  };

  return (
    <Card background={"#F4A261"} boxShadow={"null"}>
      <CardBody>
        <List>
          <Stack divider={<StackDivider borderColor="white" />}>
            {query.length > 0 &&
              isLoading &&
              !error &&
              [...Array(10).keys()].map((_, i) => (
                <Box
                  key={i}
                  width="15rem"
                  padding="0.5rem"
                  boxShadow="2xl"
                  rounded="10px"
                >
                  <HStack>
                    <SkeletonCircle />
                    <SkeletonText
                      noOfLines={1}
                      spacing={2}
                      skeletonHeight={2}
                      width="10rem"
                    />
                  </HStack>
                </Box>
              ))}
            {query.length > 0 && data && data.length === 0 && (
              <Box textAlign={"center"} shadow={"md"}>
                <WarningIcon color={"white"} />
                <Text color={"white"} fontSize={"1.1rem"}>
                  Request cannot be found! Try new request.
                </Text>
              </Box>
            )}
            {data &&
              data
                .slice(start, end)
                .map((menuItem) => (
                  <ItemList
                    key={menuItem.id}
                    image={menuItem.image_url}
                    title={menuItem.title}
                    publisher={menuItem.publisher}
                    id={menuItem.id}
                  />
                ))}
          </Stack>
        </List>
      </CardBody>
      <CardFooter>
        {data && data.length !== 0 && (
          <HStack>
            <Button
              leftIcon={<ChevronLeftIcon />}
              isDisabled={page === 1}
              onClick={handlePrevClick}
            >
              Prev
            </Button>
            <Button
              rightIcon={<ChevronRightIcon />}
              isDisabled={page > data?.length / resultsPerPage}
              onClick={handleNextClick}
            >
              Next
            </Button>
          </HStack>
        )}
      </CardFooter>
    </Card>
  );
};
