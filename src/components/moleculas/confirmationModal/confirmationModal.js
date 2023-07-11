import { Box, Text } from "@chakra-ui/react";
import Botonera from "../../botonera/Botonera";

function ConfirmationModal({ esVisible, handleRechazar, handleConfirmar, texto }) {
  const styles = {
    display: `${esVisible ? "flex" : "none"}`,
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    padding: "5%",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "#1A5F7A"
  };
  return (
    <>
      <Box sx={styles}>
        <Box
          bg="rgba(255, 255, 255, 0.8)"
          borderRadius="30px"
          padding="2%"
        >
          <Text variant={"h6"} textAlign="center" color={"#1A5F7A"}>
            {texto}
          </Text>
          <Botonera
            handleRechazar={handleRechazar}
            handleConfirmar={handleConfirmar}
          />
        </Box>
      </Box>
    </>
  );
}

export default ConfirmationModal;