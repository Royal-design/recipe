import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { RecipeDetails } from "../recipeInfo/RecipeDetails";
import { SpinnerLoading } from "../SpinnerLoading";

export type arrayType = {
  description: string;
  quantity: number;
  unit?: string;
};
export type dataType = {
  data: {
    publisher: string;
    ingredients: arrayType[];
    source_url: string;
    servings: number;
    title: string;
    cooking_time: number;
    image_url: string;
    id: string;
  };
  idLoading: boolean;
  idError: string;
};

export const MainPageDetails = ({ data, idLoading, idError }: dataType) => {
  return (
    <Box>
      {idLoading && !idError && <SpinnerLoading />}
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
          <RecipeDetails data={data} idLoading={idLoading} idError={idError} />
        </Box>
      )}
    </Box>
  );
};
