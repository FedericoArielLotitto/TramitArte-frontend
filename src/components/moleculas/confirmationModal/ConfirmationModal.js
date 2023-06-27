import theme from "@/app/theme";
import Botonera from "@/components/atomos/botonera/Botonera";
import { Box, ThemeProvider, Typography } from "@mui/material";

function ConfirmationModal({esVisible, handleRechazar, handleConfirmar, texto}) {
  const styles = {
    display: `${esVisible ? 'flex' : 'none'}`,
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
    backgroundColor: 'secondary.main',
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles}>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "30px",
            padding: "2%",
          }}
        >
          <Typography variant="h6" align="center">
            {texto}
          </Typography>
          <Botonera handleRechazar={handleRechazar} handleConfirmar={handleConfirmar} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ConfirmationModal;
