import { ChakraProvider } from "@chakra-ui/react";
import { RouterApp } from "./router/routes";
import { createContext, useState } from "react";

export const TramiteContext = createContext();

function App() {
  const [tramite, setTramite] = useState(null);

  return (
    <TramiteContext.Provider value={tramite}>
      <ChakraProvider>
        <RouterApp setTramiteContext={setTramite}/>
      </ChakraProvider>
    </TramiteContext.Provider>
  );
}

export default App;
