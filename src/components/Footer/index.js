import { Image, Flex, Text, Container } from "@chakra-ui/react";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <div style={{ width: "100%" }}>
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
          style={{ width: "100%" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxw="1083px"
          gap="20px"
          px="0px"
          mx="auto"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Text size="s" color="gray.600" alignSelf="end">
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
              <Image
                style={{ color: "white" }}
                src="images/instagramm.png"
                h="24px"
                w="24px"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="images/link.svg" h="24px" w="24px" />
            </a>
          </Flex>
        </Container>
      </Flex>
    </div>
  );
}
