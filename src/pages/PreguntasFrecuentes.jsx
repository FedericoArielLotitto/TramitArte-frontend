import Navbar from "../components/Navbar";
import Faq from "../components/Faq/Faq"
import {
    Flex,
    Box,
  } from '@chakra-ui/react';


function PreguntasFrecuentes(){
    return(
        <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        overflow={'hidden'}>
        {/* <Navbar></Navbar> */}
        <Box width={{ base: '100%', sm: 'lg', lg: 'xl' }} margin={'auto'}>
            <Faq></Faq>

        </Box>
        </Flex>
        
         
    )
}
export default PreguntasFrecuentes