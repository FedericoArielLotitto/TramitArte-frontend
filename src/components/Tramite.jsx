import {
  CircularProgress,
  CircularProgressLabel,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  CardFooter,
  Button,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { Delete } from "@mui/icons-material";

function Tramite() {
  return (
    <Card bg='teal.100' align="center" p=".8rem">
      <CardHeader>
        <HStack spacing={'2%'}>
          <Heading size="md">Código de trámite: X9889MW</Heading>
          <IconButton
            aria-label="Borrar trámite"
            color="red.400"
            icon={<Delete />}
          ></IconButton>
        </HStack>
      </CardHeader>
      <CardBody align="center">
        <CircularProgress size='300px' value={1} color="green.400" thickness='10%'>
          <CircularProgressLabel>1%</CircularProgressLabel>
        </CircularProgress>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">View here</Button>
      </CardFooter>
    </Card>
  );
}

export default Tramite;
