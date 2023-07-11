import { Box, Text } from "@chakra-ui/react";
import "./state.css"

const State = ({ text, icon }) => (
  <Box className="estado">
    <Box className="e-2" display="flex" alignItems="center">
      <Text>{text}</Text>
      {icon}
    </Box>
  </Box>
);

export default State;