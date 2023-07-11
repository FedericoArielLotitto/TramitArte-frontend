import { Box, Text } from "@chakra-ui/react";
import ButtonSubmitSecundario from "../botton/secundario/buttonSubmitSecundario";

function CustomCard({ event }) {
  return (
    <>
      <Box
        bg="rgba(255, 255, 255, 0.8)"
        borderRadius="30px"
        padding="5%"
      >
        <Text textAlign={"center"} color={"#692420"} fontWeight={"bold"} margin={0}>
          {"Aún no iniciaste tu trámite"}
        </Text>
        <Text textAlign={"center"} color={"#692420"} variant={"h6"} margin={0}>
          {"¡Inícialo aquí y consigue tu ciudadanía!"}
        </Text>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={4}>
          <ButtonSubmitSecundario texto="iniciar trámite" event={event} />
        </Box>
      </Box>
    </>
  );
}

export default CustomCard;