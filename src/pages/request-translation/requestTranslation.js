import { useEffect, useState } from "react";
import { Avatar, Box, Button, Card, CardBody, CardFooter, Grid, Image, Text, useMediaQuery } from "@chakra-ui/react";
//import { usuariosService } from "@/services/usuario.service";
import MenuComponent from "../../components/menu/menu";
import SendIcon from "../../components/icon/send/SendIcon";

const RequestPage = () => {
  const [document, setDocument] = useState(false);
  const [translator, setTranslator] = useState([]);
  
  const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"];
  
  const matches = useMediaQuery('(min-width: 576px)');
  
  const getTranslators = async () => {
   // let list = await usuariosService.getTranslators();
  //  setTranslator(list);
  };
  
  const handleClickDocument = () => {
    console.log("Hola loco");
    setDocument(true);
  };
  
  const handleClick = () => {
    console.log("Hola loco");
  };
  
  useEffect(() => {
    getTranslators();
  }, []);
  
  return (
    <div>
      {matches ? (
        <div className="page-wrapper">
          <>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <MenuComponent array={menuUser}/>
              <Box className="page-body">
                <Grid
                  container
                  spacing={1}
                  sx={{ justifyContent: 'space-between' }}
                >
                  {translator ? (
                    <Text color="info">No hay traductores registrados</Text>
                  ) : (
                    Array.from(translator).map((item, index) => (
                      <Card sx={{ maxWidth: 345, margin: '1rem' }} key={index}>
                        <Image
                          component="img"
                          height="140"
                          src="https://img.freepik.com/free-vector/illustration-paper_53876-5860.jpg?w=826&t=st=1686592542~exp=1686593142~hmac=2ad82beefe2bcbb825d13506e6c5d0899c4535d225105cd145f93b06c08c9aae"
                        />
                        <CardBody>
                          <Text gutterBottom variant="h5" component="div">
                            {item.name} - {item.surname}
                          </Text>
                          <Text variant="body2" color="text.secondary">
                            {item.description}
                          </Text>
                          <Text variant="body2" color="text.secondary">
                            $ {item.price}
                          </Text>
                        </CardBody>
                        <CardFooter>
                          <Button size="small" color="primary" onClick={handleClick}>
                            Solicitar
                          </Button>
                        </CardFooter>
                      </Card>
                    ))
                  )}
                </Grid>
              </Box>
            </Box>
          </>
        </div>
      ) : (
        <div className="page-wrapper">
          <>
            {document === false ? (
              <Box backgroundColor="primary.main" className="page-body">
                <Box backgroundColor="secondary.main" className="doc-upload">
                  <Text className="font-basics">Cargar Documento</Text>
                  <Button
                    className="font-basics"
                    onClick={handleClickDocument}
                  >
                    Cargar Documento
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box backgroundColor="primary.main" className="page-body">
                <Grid>
                  {translator ? (
                    <Text color="info">No hay traductores registrados</Text>
                  ) : (
                    translator.map((item, index) => (
                      <Card className="card-body" onClick={handleClick} key={index}>
                        <Box sx={{ padding: '0.5rem', backgroundColor: "primary.dark" }}>
                          <Avatar />
                        </Box>
                        <Box sx={{ flexDirection: "column", padding: '0 1rem' }}>
                          <Text>{item.name} {item.surname}</Text>
                          <Text>$ {item.price}</Text>
                        </Box>
                        <Box sx={{ padding: '0 1rem' }}>
                          <SendIcon color="info" />
                        </Box>
                      </Card>
                    ))
                  )}
                </Grid>
              </Box>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default RequestPage;