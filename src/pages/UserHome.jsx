import { Box, Flex } from "@chakra-ui/react";
import UserNavbar from "../components/UserNavbar";
import { Outlet } from "react-router";

function UserHome() {
  return (
    <Box minH="100%" bg="teal.200">
      <UserNavbar />
      <Flex bg="teal.200" p="1.4rem" justifyContent={"center"}>
        <Outlet />
      </Flex>
    </Box>
  );
}

export default UserHome;
