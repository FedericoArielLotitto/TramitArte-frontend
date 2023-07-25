
import { useAuth0, User } from '@auth0/auth0-react';
import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Stack,
  useColorModeValue,

} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";

export default function VerifyEmailForm() {
    const { user, isLoading, isAuthenticated }= useAuth0()
    // const [userP, setUserP] = useState(null)
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0()
    console.log(JSON.stringify(user))
    const navegar = () =>{
        console.log(isLoading)
        !isLoading && navigate("/eleccion-rol")
    }

    useEffect(() => navegar(), [user])

  return ( 
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verifica tu Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
         Te enviamos la verificacion a tu email! acepta para poder continuar
        </Center>
               <FormControl>
         
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={loginWithRedirect}
            >
            ya lo verifiqué!
            
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}