import { Image, Flex, Text, Container } from "@chakra-ui/react";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <div style={{ width: "100%" }}>
      <Flex
        {...props}
        as="footer"
        mt="78px"
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
          // background={"red"}
          display="flex"
          justifyContent="space-between"
          // alignItems="center"
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
            <Image src="images/img_socials.svg" h="24px" w="24px" />
            {/* <Image src="images/img_socials_white_a700.svg" h="24px" w="24px" />
          <Image
          src="images/img_socials_white_a700_24x24.svg"
          h="24px"
          w="24px"
          /> */}
            <Image src="images/icons8-linkedin-30.png" h="24px" w="24px" />
            <Image src="images/img_socials.svg" h="24px" w="24px" />

            {/* <Image src="images/img_socials_2.svg" h="24px" w="24px" /> */}
          </Flex>
        </Container>
      </Flex>
    </div>
  );
}
