import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

export default function About() {
  return (
    <Container maxW={'7xl'} py={{ base: "6", lg: "24" }}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', xl: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} width='full'>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.500',
                zIndex: -1,
              }}>
              Hi, I&apos;m Mike
            </Text>
            <br />
            <Text
              as={'span'}
              color={'red.500'}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
              Web Developer
            </Text>
          </Heading>
          <Text fontSize='2xl' color={'gray.500'} width={{ base: 'full', lg: '600px' }}>
            I work on the web to solve problems using React and related tech such as Next.js, GraphQL and TypeScript.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.500')}
          />
          <Box
            position={'relative'}
            bgPosition='bottom'
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'500px'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'500'}
              h={'400'}
              src={
                '/mike.jpg'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};