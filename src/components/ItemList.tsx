import { Box, HStack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

type PropsType = {
  image: string;
  title: string;
  publisher: string;
  id: string;
};

export const ItemList = ({ image, title, publisher, id }: PropsType) => {
  const handleclick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box
      onClick={handleclick}
      cursor="pointer"
      backgroundColor="white"
      width="15rem"
      padding="0.5rem"
      boxShadow="2xl"
      rounded="10px"
    >
      <HStack>
        <NavLink className={"nav"} to={`/mainpage/${id}`}>
          <Avatar mr={"4px"} size="sm" name={`${publisher}`} src={`${image}`} />
          <Text fontSize="1.2rem">{title}</Text>
        </NavLink>
      </HStack>
    </Box>
  );
};
