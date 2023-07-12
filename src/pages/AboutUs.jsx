import {
  Container,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function AboutUs() {
  return (
    <Container id="sobre-nosotros" maxW={"full"} py={12}>
        <Box>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"https://www.beetrack.com/hubfs/Soluciones%20digitales.jpg"}
            objectFit={"cover"}
          />
        </Box>
        <Box>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Nuestra Historia
          </Text>
          <Heading>De estudiantes a creadores digitales.</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Federico"}
            />
            <Feature
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Ezequiel"}
            />
            <Feature
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Dario"}
            />
            <Feature
              iconBg={useColorModeValue("blue.100", "purple.900")}
              text={"Mateo"}
            />
            <Feature
              iconBg={useColorModeValue("red.100", "purple.900")}
              text={"Leandro"}
            />
          </Stack>
        </Box>
    </Container>
  );
}
export default AboutUs;
