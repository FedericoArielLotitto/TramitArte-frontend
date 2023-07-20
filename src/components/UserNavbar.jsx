import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Tabs,
  Tab,
  TabList,
  Tag,
  TagLeftIcon,
  TagLabel,
  Icon,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  QuestionIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import {
  AccountCircle,
  Email,
  Home,
  Logout,
  NotificationAdd,
  NotificationImportant,
  Notifications,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

const Links = [
  {
    texto: "Traductores Registrados",
    link: "/traductores",
  },
  {
    texto: "Family Search",
    link: "/family-search",
  },
];

const NavLink = ({ texto, link }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color={useColorModeValue("white", "teal.200")}
    _hover={{
      textDecoration: "underline",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={link}
  >
    {texto}
  </Link>
);

export default function UserNavbar() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColors = useColorModeValue("teal.300", "blue.900");
  const colors = useColorModeValue("white", "blue.900");

  return (
    <>
      <Box color={colors} bg={bgColors} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg={bgColors}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color={colors}
          />
          <HStack color="white" spacing={8} alignItems={"center"}>
            <Box>Tramitarte</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ link, texto }) => (
                <NavLink key={link} link={link} texto={texto} />
              ))}
              <NavLink
                display={{ base: "none", md: "flex" }}
                key={"/preguntas-frecuentes"}
                link={"/preguntas-frecuentes"}
                texto={"Preguntas Frecuentes"}
              />
            </HStack>
          </HStack>
          <Flex
            justifyContent="space-between"
            gap=".8rem"
            alignItems={"center"}
          >
            <Tag
              borderRadius="45px"
              size={"sm"}
              key={"md"}
              variant="solid"
              bg="teal.300"
            >
              <TagLeftIcon boxSize="8" as={Email} />
              <TagLabel ml={"-.4rem"}>{3}</TagLabel>
            </Tag>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList color={useColorModeValue("blue.900", "white")}>
                <MenuItem
                  onClick={() => navigate("/usuario")}
                  icon={<AccountCircle />}
                >
                  Mi perfil
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => navigate("/logout")} icon={<Logout />}>
                  Cerrar sesi&oacute;n
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ link, texto }) => (
                <NavLink key={texto} texto={texto} link={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Tabs
        borderRadius="20px"
        border="none"
        p="2%"
        h={16}
        w="100%"
        position="absolute"
        bottom={0}
        display={{ md: "none" }}
      >
        <TabList
          bg="teal.300"
          borderRadius="20px"
          border="none"
          justifyContent="space-evenly"
        >
          <Tab onClick={() => navigate("/home/solicitante/tramite")}>
            <Icon color="white" as={Home} boxSize={8} />
          </Tab>
          <Tab onClick={() => navigate("/preguntas-frecuentes")}>
            <QuestionIcon color="white" bg="teal.300" boxSize={8} />
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
}
