import {
    Button,
    Checkbox,
    Flex,
    IconButton,
    SearchIcon,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack minH={'50px'}direction={{ base: 'column', md: 'row'}}>
        <Flex flex={1}>
          <Image 
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxsFA0ki3SFZ1Zz7u7Q4yOAqzJN1PdbvOiA&usqp=CAU'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Payment details</Heading>
            <FormControl id="email">
              <FormLabel>CARDHOLDER NAME</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel></FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }