import { Button } from "@chakra-ui/react";

const ButtonSubmitSecundario = ({ texto, event }) => (
    <Button borderRadius="45px" backgroundColor={"#692420"} color={"#F6F4FF"} onClick={event}>
      {texto}
    </Button>
);

export default ButtonSubmitSecundario;