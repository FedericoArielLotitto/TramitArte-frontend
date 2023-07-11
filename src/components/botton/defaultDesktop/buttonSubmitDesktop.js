import { Button } from "@chakra-ui/react";

const styles = {
    width: "12.5rem",
    height: "3rem",
    backgroundColor: "#57C5B6",
    borderRadius: "3rem",
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1em",
    lineHeight: "1.25em",
    color: "#000000"
}

const ButtonSubmitDesktop = ({ texto, event, type }) => (
    <>
        {type === "cancel" ? (
            <Button sx={styles} style={{background: "#BBBBBB"}} onClick={event}>{texto}</Button>
        ) : (
            <Button sx={styles} onClick={event}>{texto}</Button>
        )}
    </>
);

export default ButtonSubmitDesktop;