import { Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem
        as="aside"
        height={"100vh"}
        backgroundColor="#F4A261"
        colSpan={{ base: 1, lg: 1, xl: 1 }}
        padding="20px"
      >
        <Sidebar />
      </GridItem>
      <GridItem
        backgroundColor="#EEEEEE"
        as="main"
        colSpan={{ base: 5, lg: 5, xl: 5 }}
        padding="20px"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};
