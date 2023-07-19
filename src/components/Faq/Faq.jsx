import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

import { ChevronDownIcon } from "@chakra-ui/icons";
import Map from "../Map";

export default function Faq() {
  return (
    <Accordion
      py="2%"
      id="preguntas-frecuentes"
      allowMultiple
      w="100%"
      maxW="100%"
    >
      <AccordionItem>
        <AccordionButton
          display="flex"
          alignItems="center"
          bg="teal.300"
          color="white"
          justifyContent="space-between"
          p={4}
          w="full"
          _hover={{ bg: "teal.300" }}
        >
          <Text fontSize="md">{"¿Cómo saber cuál es mi AVO?"}</Text>
          <ChevronDownIcon fontSize="24px" />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text>
            Pod&eacute;s realizar la b&uacute;squeda de tu AVO (antepasado
            italiano que emigr&oacute;) en:&nbsp;
            <Link
              color="teal.400"
              href="https://www.familysearch.org/"
              isExternal
            >
              Family Search <ExternalLinkIcon mx="2px" />
            </Link>
            &nbsp;o&nbsp;
            <Link color="teal.400" href="https://www.myheritage.es/" isExternal>
              My Heritage <ExternalLinkIcon mx="2px" />
            </Link>
            <br />
            Una vez terminada la búsqueda, cargá los datos en la Etapa 1
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          display="flex"
          bg="teal.300"
          color="white"
          alignItems="center"
          justifyContent="space-between"
          p={4}
          _hover={{ bg: "teal.300" }}
        >
          <Text fontSize="md">
            {"¿Dónde está el consulado italiano más cercano?"}
          </Text>
          <ChevronDownIcon fontSize="24px" />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Map />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bg="teal.300"
          color="white"
          p={4}
          _hover={{ bg: "teal.300" }}
        >
          <Text fontSize="md">{'¿Cómo solicitar la partida de nacimiento de mi AVO?'}</Text>
          <ChevronDownIcon fontSize="24px" />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text>
            {`Si el avo nació antes de 1861, la partida es de Bautismo y hay que
              solicitarla en la Parroquia en que nació. Si nació después, es de
              comuna y se solicita en la comuna correspondiente.`}
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bg="teal.300"
          color="white"
          p={4}
          _hover={{ bg: "teal.300" }}
        >
          <Text fontSize="md">{'¿De dónde obtengo el mail y el teléfono de la Comuna en la que nació?'}</Text>
          <ChevronDownIcon fontSize="24px" />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text>
            {`En el sitio oficial de la comuna puede aparecer como:
              <p>1- Ufficio Anagrafe</p>
              <p>2- Ufficio di Stato Civile</p>`}
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          display="flex"
          alignItems="center"
          bg="teal.300"
          color="white"
          justifyContent="space-between"
          p={4}
          _hover={{ bg: "teal.300" }}
        >
          <Text fontSize="md">{'¿Qué certificados necesito?'}</Text>
          <ChevronDownIcon fontSize="24px" />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text>
            {`Necesitás el certificado de nacimiento de tu AVO, y todos los
              descendientes directos hasta llegar a vos. Si se casó en Italia,
              deberás tener el certificado de matrimonio.`}
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
