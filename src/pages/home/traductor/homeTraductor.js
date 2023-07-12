import { Box } from "@chakra-ui/react";
import MenuComponent from "../../../components/menu/menu";
import TranslatorComponent from "../../../components/translator/translator";
import "../../../components/home/home.css";
import { useState } from "react";

class User {
  constructor(name, id, image, document) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.document = document;
  }
}

const HomeTranslatorComponent = () => {
  const user1 = new User(
    "Mateo Pastorini",
    "ASDFDF8787",
    "https://img.freepik.com/fotos-premium/vista-lateral-perfil-retrato-hombre-barbudo-joven-guapo-tranquilo-serio-camisa-negra-pie-mirando-adelante-tiro-estudio-interior-aislado-sobre-fondo-pared-blanca-clara_2221-7780.jpg",
    "Certificado.pdf"
  );
  const userArray = [user1, user1, user1, user1];
  const [users, setUsers] = useState(userArray);

  const handleDeleteUser = (updatedUsers) => {
    setUsers(updatedUsers);
  };

  return (
    <Box className="container">
      <Box className="home-conteiner">
        <Box className="columns-container">
          <MenuComponent />
          <TranslatorComponent users={users} onDelete={handleDeleteUser} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeTranslatorComponent;