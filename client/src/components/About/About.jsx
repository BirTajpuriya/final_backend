import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import introVideo from '../../assets/videos/intro.mp4';
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About us" textAlign={['center', 'left']} />

      {/* <Founder /> */}
      <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
          <Avatar
            src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
            boxSize={['40', '48']}
          />
          <Text children="Sahayogi Team" opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="SAHAYOGI" size={['md', 'xl']} />
          <Text
            textAlign={['center', 'left']}
            children={`Hi, We offers practice exercises, instructional videos, and a personalized learning dashboard that empower learners to study at their own pace in and outside of the classroom. We tackle math, science, computing, history, art history, economics, and more, including K-14 and test preparation (SAT, Praxis, LSAT) content. We focus on skill mastery to help learners establish strong foundations, so there's no limit to what they can learn next!. Our mission is to provide quality content at a resonable price.`}
          />
        </VStack>
      </Stack>

      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            {' '}
            Checkout Our plan{' '}
          </Button>
        </Link>
      </Stack>

      {/* this is for video player */}

      <Box>
        <video
          autoPlay
          muted
          loop
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>{' '}
      </Box>
      {/* terms and conditions */}
      <Box>
        <Heading
          size={'md'}
          children="Terms & Condition"
          textAlign={['center', 'left']}
        />
      </Box>
      <Box h="sm" p="4">
        <Text
          letterSpacing={'widest'}
          fontFamily={'heading'}
          textAlign={['center', 'left']}
        ></Text>
      </Box>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable within 7 days"
      />
      {/* terms ends here */}
      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        ></Heading>
      </HStack>
    </Container>
  );
};
export default About;
