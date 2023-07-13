import {
  CircularProgress,
  CircularProgressLabel,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { Delete } from "@mui/icons-material";

function Tramite() {
  return (
    <Card
      borderRadius="45px"
      bg="rgba(255, 255, 255, 0.8)"
      align="center"
      p=".8rem"
    >
      <CardHeader>
        <HStack spacing={"2%"}>
          <Heading size="md">Código de trámite: X9889MW</Heading>
          <IconButton
            aria-label="Borrar trámite"
            color="red.500"
            size="lg"
            icon={<Delete fontSize="large"/>}
          ></IconButton>
        </HStack>
      </CardHeader>
      <CardBody align="center">
        <CircularProgress
          capIsRound
          trackColor="blue.100"
          size="300px"
          value={1}
          color="blue.900"
          thickness="10%"
        >
          <CircularProgressLabel>1%</CircularProgressLabel>
        </CircularProgress>
      </CardBody>
      <CardFooter w="100%">
        <Button borderRadius="45px" w="100%" color="white" bg="red.900">
          Ver avance
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Tramite;
