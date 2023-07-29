import { Box, Center, Text, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBack } from "@mui/icons-material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { TramiteContext } from "../App";

function Documentacion() {
  const navigate = useNavigate();
  const tramiteContext = useContext(TramiteContext);

  const handleBack = () => {
    navigate(-1);
  };
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
      <Center p="1.4rem">
        <Center
          w="sm"
          borderRadius="45px"
          py=".8rem"
          bg="blue.900"
          color="white"
          fontWeight={"700"}
        >
          {tramiteContext.codigo}
        </Center>
      </Center>
      <Center flexWrap="wrap" p="1.4rem">
        <Flex textAlign="center" justifyContent="center" w={"sm"}>
          <Text as={'h2'} fontSize={'3xl'}>{"Documentación Personal"}</Text>
        </Flex>
        <Flex textAlign="center" justifyContent="center" w={"sm"}>
          <Text as={'h2'} fontSize={'3xl'}>{"Documentación AVO"}</Text>
        </Flex>
        <Flex textAlign="center" justifyContent="center" w={"sm"}>
          <Text as={'h2'} fontSize={'3xl'}>{"Documentación Ascendentes"}</Text>
        </Flex>
      </Center>
    </Box>
  );
}

export default Documentacion;
