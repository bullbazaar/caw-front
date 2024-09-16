import { Box, chakra, Flex, Heading, Stack, VStack, Text, useBreakpointValue, Spacer, useColorModeValue, Tag, TagLabel } from '@chakra-ui/react';
import { m } from 'framer-motion';

import { ParallaxText, ParallaxItemWrapper } from 'src/components/animate/ParallaxText';
import { varFade } from 'src/components/animate';

import { FlippingText } from './FlippingText';
import { ContentAlign, DecentralizedTextStyle } from './HeroSection';
import { DataModel, dataSet1, dataSet2, dataSet3 } from './card-content';

export const CARD_HEIGHT = 267;
export const CARD_WIDTH = 450;

function Card({ data }: { data: DataModel }) {
  return (
    <div className="opacity-30 transition-opacity duration-500 hover:opacity-60">
      <Tag
        minWidth={CARD_WIDTH}
        maxWidth={CARD_WIDTH}
        minHeight={CARD_HEIGHT}
        maxHeight={CARD_HEIGHT}
        colorScheme={data.colorSchema}
        variant="subtle"
        letterSpacing={'0.1em'}
        borderRadius="2xl"
        textTransform={'none'}
        fontSize="md"
        sx={{ wordSpacing: '0.1em' }}
      >
        <TagLabel width="-webkit-fill-available" textAlign="center">
          {data.title}
        </TagLabel>
      </Tag>
    </div>
  );
}

export default function CardParallaxSection() {
  const isMd = useBreakpointValue({ base: false, md: true });
  const px = useBreakpointValue({ base: 4, md: 8 });
  const textColor = useColorModeValue('gray.700', 'gray.100');

  return (
    <>
      <div
        id="title-and-text-about-caw-manifesto"
        className="landing-title-fade-in pointer-events-none absolute z-10 hidden w-full p-2 text-center md:block"
      >
        <Flex w={'full'} h={'container.lg'} p={2} backgroundPosition={'center center'}>
          <VStack w={'full'} justify={'center'} px={px} p={2}>
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6} p={2}>
              <Heading as="h1" fontSize="9xl" fontWeight="extrabold" zIndex={3} color={'white'} p={2}>
                <Box w="100%" alignSelf="center">
                  <m.div variants={varFade().inUp}>
                    <ContentAlign>
                      <Text
                        id="decentralized-social-clearing-house"
                        color={textColor}
                        fontSize="6xl"
                        fontWeight="bold"
                        textAlign={'center'}
                        zIndex={7}
                      >
                        A
                        <br />
                        <DecentralizedTextStyle>DECENTRALIZED</DecentralizedTextStyle>
                        <br />
                        SOCIAL CLEARING HOUSE
                      </Text>
                    </ContentAlign>
                  </m.div>
                  <Spacer h={10} />
                  <m.div variants={varFade().in}>
                    <chakra.div paddingLeft={{ base: 0, md: '30%' }}>
                      <FlippingText textColor={textColor} />
                    </chakra.div>
                  </m.div>
                  <br />
                </Box>
              </Heading>
            </Stack>
          </VStack>
        </Flex>
      </div>
      <Box id="social-issues-section" className="mt-[-130px] overflow-hidden">
        <div className="landing-cards-zoom-in hidden md:block">
          <ParallaxText baseVelocity={isMd ? 1 : 0}>
            <ParallaxItemWrapper id="pax-group-1">
              {dataSet1.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </ParallaxItemWrapper>
          </ParallaxText>
          <ParallaxText baseVelocity={isMd ? -1 : 0}>
            <ParallaxItemWrapper id="pax-group-2">
              {dataSet2.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </ParallaxItemWrapper>
          </ParallaxText>
          <ParallaxText baseVelocity={isMd ? 0.5 : 0}>
            <ParallaxItemWrapper id="pax-group-3">
              {dataSet3.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </ParallaxItemWrapper>
          </ParallaxText>
        </div>
      </Box>
    </>
  );
}
