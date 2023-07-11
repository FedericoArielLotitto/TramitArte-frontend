import { Button } from "@chakra-ui/react";

const customButtonStyle = { 
    color: "white",
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: "1.8rem",
    borderRadius: "2.8rem",
    width: "60%",
    height: "5.6rem",
    backgroundColor:"#692420"
}

const ButtonSubmitSecundarioDesktop = ({ text, event }) => (
    <Button sx={customButtonStyle} onClick={event}>{text}</Button>
)

export default ButtonSubmitSecundarioDesktop;