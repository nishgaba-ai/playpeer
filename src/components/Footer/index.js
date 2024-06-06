import { Image, Flex, Text, Container } from "@chakra-ui/react";
import React from "react";
import img1 from "../../assets/images/discord.webp";
import img2 from "../../assets/images/tg.png";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer({ ...props }) {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "200px",
      }}
    >
      <Flex
        {...props}
        as="footer"
        // mt="78px"
        borderColor="white.A700 33"
        borderTopwidth="1px"
        borderstyle="solid"
        alignSelf="stretch"
        justifyContent="center"
        alignItems="center"
        p="20px"
        style={{ width: "100%" }}
      >
        <Container
          // w="100%"
          style={{ width: "100%", transform: "translateX(-10%)" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxw="1083px"
          gap="20px"
          px="0px"
          mx="auto"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Text size="s" color="gray.600" alignSelf="end"
          style={{  fontFamily: 'Inter, sans-serif' }}
          >
            @ 2024 PeerToPlay. All rights reserved
          </Text>

          <Flex gap="11px">
            <a
              href="https://x.com/Peer2playAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="images/img_socials.svg" h="24px" w="24px" />
            </a>
            <a
              href="https://discord.gg/fN4MFFxC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image style={{ color: "white" }} src={img1} h="28px" w="28px" />
            </a>
            <a
              href="https://t.me/+_jN0qLddLrw0ZjY1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane  style={{height:"28px", width:"28px",color:"white"}}/>
              {/* <Image style={{ color: "white" }} src={img2} h="28px" w="28px" /> */}
            </a>
          </Flex>
        </Container>
      </Flex>
    </div>
  );
}
