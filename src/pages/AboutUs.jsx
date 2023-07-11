import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
  import NavBar from '../components/Navbar'
  
 
  
 
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
   function AboutUs() {
    return (
     <Flex direction={"column"}>

    <NavBar></NavBar>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
             Nuestra Historia
            </Text>
            <Heading>De estudiantes a creadores digitales.</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
            <Stack
              spacing={4}
              divider={
                  <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
              <Feature
               
               iconBg={useColorModeValue('yellow.100', 'yellow.900')}
               text={'Federico'}
               />
              <Feature
             
             iconBg={useColorModeValue('green.100', 'green.900')}
             text={'Ezequiel'}/>
              <Feature
              
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Dario'}
              />
                <Feature
              
              iconBg={useColorModeValue('blue.100', 'purple.900')}
              text={'Mateo'}
              />
                  <Feature
              
              iconBg={useColorModeValue('red.100', 'purple.900')}
              text={'Leandro'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                  'https://www.beetrack.com/hubfs/Soluciones%20digitales.jpg'
                }
                objectFit={'cover'}
                />
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>  
    );
  }
  export default AboutUs