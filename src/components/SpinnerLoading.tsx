import { Box, Spinner } from "@chakra-ui/react";

export const SpinnerLoading = () => {
  return (
    <Box marginTop={"2rem"} display={"flex"} justifyContent={"center"}>
      <Spinner />
    </Box>
  );
};
