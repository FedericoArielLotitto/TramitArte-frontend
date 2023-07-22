import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";

import { Delete } from "@mui/icons-material";
import banderaItailiana from "../assets/baneraItaliana.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Etapa from "./Etapa";
import tramiteService from "../services/TramiteService";

const BanderaItaliana = ({ height }) => (
  <Box zIndex={-1} position="" left={0} bottom={1} h={height}>
    <Box
      display="inline-block"
      borderRadius="10px 0 0 10px"
      w="33%"
      h="100%"
      bg="green.200"
    />
    <Box display="inline-block" w="33%" h="100%" bg="white" />
    <Box
      display="inline-block"
      borderRadius="0 10px 10px 0"
      w="33%"
      h="100%"
      bg="red.300"
    />
  </Box>
);

function Tramite() {
  const navigate = useNavigate();
  const [estaCargando, setEstaCargando] = useState(true);
  const [tramite, setTramite] = useState();

  useEffect(() => {
    tramiteService.buscarPorUsuario(6).then(
      response => {
        setEstaCargando(false);
        let tramitePersistido = response.data;
        setTramite(tramitePersistido);
      }
    ).catch( error => navigate("/network-error") );
  });
  return (
    <>
      { estaCargando ? <Box w="full" h="100%" padding="6" boxShadow="lg" bg="teal.200">
      <SkeletonCircle
        isLoaded={!estaCargando}
        startColor="teal.100"
        endColor="teal.300"
        size="10"
      />
      <SkeletonText
        isLoaded={!estaCargando}
        startColor="teal.100"
        endColor="teal.300"
        mt="6"
        noOfLines={4}
        spacing="6"
        skeletonHeight="3"
      />
      </Box> :
      <Etapa tramite={tramite} /> }
    </>
  );
}

export default Tramite;
