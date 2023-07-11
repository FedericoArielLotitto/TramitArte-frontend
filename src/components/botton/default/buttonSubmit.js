import { Button } from "@chakra-ui/react";

const ButtonSubmit = ({ text, width, event }) => (
    <Button borderRadius="45px" width={width} onClick={event} color={"#57c5b6"}>
      {text}
    </Button>
);

export default ButtonSubmit;