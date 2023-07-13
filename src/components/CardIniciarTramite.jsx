import {
  Card,
  Text,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Flex
} from "@chakra-ui/react";

function CardIniciarTramite() {
  return (
    <Flex py="1.2rem" justifyContent="center">
      <Card
        borderRadius="45px"
        bg="rgba(255, 255, 255, 0.8)"
        align="center"
        p=".8rem"
      >
        <CardHeader>
          <Heading size="md">{"Aún no iniciaste tu trámite"}</Heading>
        </CardHeader>
        <CardBody align="center">
          <Text>{"¡Inicialo acá y conseguí tu ciudadanía!"}</Text>
        </CardBody>
        <CardFooter w="100%">
          <Button borderRadius="45px" color="white" w="100%" bg="red.900">
            {"Iniciar trámite"}
          </Button>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default CardIniciarTramite;
