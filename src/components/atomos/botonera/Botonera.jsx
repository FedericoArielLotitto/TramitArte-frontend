import { CheckBox, DisabledByDefault } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

function Botonera({ handleRechazar, handleConfirmar }) {
  return (
    <Box sx={{ padding: "2%", display: "flex", justifyContent: "flex-end" }}>
      <IconButton onClick={handleRechazar} size='large'>
        <DisabledByDefault color="error" fontSize="large" />
      </IconButton>
      <IconButton onClick={handleConfirmar} color='primary' size='large'>
        <CheckBox fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default Botonera;
