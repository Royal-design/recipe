import { Box, HStack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UseMenuHook } from "../hooks/UseMenuHook";

type PropsType = {
  image: string;
  title: string;
  publisher: string;
  id: string;
};

export const ItemList = ({ image, title, publisher, id }: PropsType) => {
  const { setId } = UseMenuHook();
  const navigate = useNavigate();
  const handleclick = () => {
    navigate(`/mainpage/${id}`);
    setId(id);
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
        <Avatar size="sm" name={`${publisher}`} src={`${image}`} />
        <Text fontSize="1.2rem">{title}</Text>
      </HStack>
    </Box>
  );
};
