import { Box, Flex } from "@chakra-ui/react";
import UserNavbar from "../components/UserNavbar";
import { Outlet } from "react-router";

function UserHome() {
  return (
    <Box minH='100%' bg='teal.200'>
      <UserNavbar />
      <Flex bg='teal.200' justifyContent={'center'}>
        <Outlet />
      </Flex>
    </Box>
  );
}

export default UserHome;
