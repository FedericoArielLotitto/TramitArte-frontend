import { Box } from "@chakra-ui/react";
import UserNavbar from "../components/UserNavbar";
import { Outlet } from "react-router";

function UserHome() {
  return (
    <Box minH='100%' bg='teal.200'>
      <UserNavbar />
      <Box bg='teal.200' p='2.4rem'>
        <Outlet />
      </Box>
    </Box>
  );
}

export default UserHome;
