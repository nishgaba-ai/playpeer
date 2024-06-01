import React from "react";
import { Image, Button, Text, Heading, Box } from "@chakra-ui/react";

function LandingPage() {
  return (
    <Box style={{ width: "100%" }}>
      {/* Hero section */}
      <Box
        bgGradient="linear-gradient(180deg, #000000,#200d42,#4f21a1,#a46edb)"
        px="2%"
        py="7%"
        height="50vh"
        position="relative"
      >
        <Box textAlign="center">
          <Heading
            size="md"
            letterSpacing="-1.60px"
            fontSize={{ base: "48px", md: "128.04px" }}
            color="white"
            mb="10px"
          >
            Peer2Play
          </Heading>
          <Text fontSize="16px" letterSpacing="-0.79px" color="white" mb="20px">
            Connect, Invite, Challenge & Earn
          </Text>
          <Button
            size="md"
            letterSpacing="-0.32px"
            fontFamily="Inter"
            fontWeight={500}
            minWidth="153px"
            borderRadius="10px"
          >
            Connect Wallet
          </Button>
        </Box>
        <Image
          src="images/img_cursor_2.png"
          h="63px"
          w="17%"
          position="absolute"
          left="7%"
          bottom="35%"
          zIndex="5"
          style={{ transform: "rotate(45deg)" }}
        />
        <Image
          src="images/img_cylinder_1.png"
          h="67px"
          w="15%"
          position="absolute"
          right="6%"
          bottom="25%"
          zIndex="6"
        />

        <Image
          src="images/img_torus_1.png"
          h="87px"
          w="17%"
          position="absolute"
          top="0"
          left="4%"
          transform="translateX(-50%)"
          zIndex="2"
        />

        <Image
          src="images/img_message_1.png"
          h="87px"
          w="17%"
          position="absolute"
          top="-10"
          right="15%"
          transform="translateX(50%)"
          zIndex="3"
        />
      </Box>

      {/* Decorative images */}
      <Box textAlign="center" position="relative">
        {/* <Image
          src="images/img_message_1.png"
          h="200px"
          w="200px"
          position="absolute"
          top="0"
          right="50%"
          transform="translateX(50%)"
          zIndex="3"
        /> */}
        <Image
          src="images/Ellipse_2.png"
          w="100%"
          position="absolute"
          //   bottom="-47px"
          left="0"
          top="-39"
          zIndex="4"
        />
      </Box>
    </Box>
  );
}

export default LandingPage;
