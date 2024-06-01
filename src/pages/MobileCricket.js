import React from "react";
import { Image, Flex, Text, Heading, Box } from "@chakra-ui/react";

function MobileCricket() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      //   p={{ base: "10px", md: "20px" }}
    >
      {/* <Image
        src="/images/img_peers_to_play_6.png"
        height={{ base: "200px", md: "250px" }}
        width="100%"
        borderRadius="50px"
        objectFit="cover"
        mb="20px"
      /> */}
      <Box
        borderColor="deep_purple.900"
        borderWidth="1px"
        borderStyle="solid"
        w="100%"
        borderRadius="50px"
        p={{ base: "15px", md: "20px" }}
        mb="20px"
        bgImage="url(/images/img_peers_to_play_6.png)"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        {/* <Image
          src="/images/cricket-ball.png"
          height={{ base: "70px", md: "100px" }}
          width={{ base: "70px", md: "100px" }}
          borderRadius="50px"
          mb="10px"
        />
        <Image
          src="/images/cricket-ball-02.png"
          height={{ base: "50px", md: "70px" }}
          width={{ base: "50px", md: "70px" }}
          borderRadius="50px"
          mb="20px"
        /> */}
        <Heading
          letterSpacing="-0.24px"
          color="white"
          //   fontWeight={300}
          //   mb="10px"
          textAlign="center"
          fontSize={{ base: "lg", md: "xl" }}
        >
          Decentralized
        </Heading>
        <Heading
          letterSpacing="-0.14px"
          color="white"
          //   fontWeight={300}
          //   mb="10px"
          textAlign="center"
          fontSize={{ base: "lg", md: "xl" }}
        >
          Cricket League
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          lineHeight="108.19%"
          color="white"
          textAlign="center"
          mb="20px"
          mt="10px"
        >
          Free-2-Play & Play to Earn Blockchain game. It is an ideal game in the
          sports tycoon simulation game. This game is one of the first
          blockchain game for men and women. This Decentralized Cricket League
          game is a half a billion dollar market with global impact: video
          games, cricket, sports. Where players can play around in Blockchain,
          NFT, Metaverse technologies, which is another multi-billion dollar
          industry.
        </Text>
        <Image
          src="/images/img_player.png"
          height="auto"
          width="100%"
          mb="20px"
          borderRadius="50px"
        />
        <Text
          border="1px solid white"
          fontSize={{ base: "xs", md: "sm" }}
          color="white"
          p="10px"
          borderRadius="50px"
          textAlign="center"
        >
          Coming Soon
        </Text>
      </Box>
    </Flex>
  );
}

export default MobileCricket;
