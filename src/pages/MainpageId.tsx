import { useParams } from "react-router-dom";
import { endPoint, getApibyId } from "../api/GetMenu";
import useSWR from "swr";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { RecipeDetails } from "../components/recipeInfo/RecipeDetails";

export const MainpageId = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR([endPoint, id], ([endpoint, id]) =>
    getApibyId(endpoint, id)
  );

  return (
    <Box>
      {isLoading && !error && <SpinnerLoading />}
      {data && (
        <Box>
          <Flex justifyContent="center" position={"relative"}>
            <Image
              src={data?.image_url}
              alt={data?.title}
              rounded="lg"
              width="50rem"
              height="25rem"
              objectFit="cover"
              marginTop="2rem"
            />
          </Flex>
          <Heading
            className={`heading-transform ${!data?.image_url && `visibility`}`}
            as="h2"
            position={"absolute"}
            top={"15rem"}
            left={"45%"}
            opacity={"0.7"}
            rounded={"lg"}
            width={"25rem"}
            textAlign={"center"}
            background={"#F4A261"}
            padding={"0.5rem"}
            color={"white"}
          >
            {data?.title}
          </Heading>
          <RecipeDetails data={data} idLoading={isLoading} idError={error} />
        </Box>
      )}
    </Box>
  );
};
