import { Box, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";

function Documentacion() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <Box minH="100%" bg="teal.200">
      <Flex w="100%" p=".8rem" justify="space-between">
        <IconButton
          onClick={() => handleBack()}
          color="blue.900"
          bg="white"
          boxShadow={"0px 4px 10px 3px rgba(26, 54, 93, .5)"}
          borderRadius="50%"
          size="lg"
          icon={<ArrowBack />}
        />
      </Flex>
    </Box>
  );
}

export default Documentacion;
