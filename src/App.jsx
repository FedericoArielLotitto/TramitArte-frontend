import { ChakraProvider } from "@chakra-ui/react";
import { RouterApp } from "./router/routes";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider>
        <RouterApp />
    </ChakraProvider>
  );
}

export default App;
