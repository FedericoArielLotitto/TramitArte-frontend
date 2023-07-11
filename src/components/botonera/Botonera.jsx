import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

function Botonera({ handleRechazar, handleConfirmar }) {
  return (
    <Box sx={{ padding: "2%", display: "flex", justifyContent: "flex-end" }}>
      <IconButton onClick={handleRechazar} size='lg'>
        <CloseIcon color="error" boxSize={8} />
      </IconButton>
      <IconButton onClick={handleConfirmar} color='#57c5b6' size='lg'>
        <CheckIcon boxSize={8} />
      </IconButton>
    </Box>
  );
}

export default Botonera;