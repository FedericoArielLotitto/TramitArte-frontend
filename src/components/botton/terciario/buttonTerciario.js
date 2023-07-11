import { Button} from "@chakra-ui/react";

const ButtonTerciario = ({ texto, width, onClick }) => (
    <Button
      borderRadius="45px"
      width={width}
      onClick={onClick}
      backgroundColor={"#1A5F7A"}
      color={"#F6F4FF"}
    >
      {texto}
    </Button>
);

export default ButtonTerciario;