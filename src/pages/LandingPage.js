import React from "react";
import { useNetwork } from "wagmi";
import { Image, Button, Flex, Text, Heading, Box } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function LandingPage() {
  const { chain } = useNetwork();

  return (
    <div style={{ width: "100%" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      {/* hero section */}
      <Box alignSelf="stretch">
        <Box position="relative">
          <Box w="100%">
            <Flex
              bgGradient="linear-gradient(180deg, #000000,#200d42,#4f21a1,#a46edb)"
              justifyContent="center"
              px="56px"
              py="117px"
              p={{ md: "", base: "20px" }}
            >
              <Flex
                mt="37px"
                mb="149px"
                w={{ md: "87%", base: "100%" }}
                justifyContent="center"
                alignItems="center"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Box
                  h="295px"
                  mb="14px"
                  flex={{ md: 1, base: "unset" }}
                  position="relative"
                  w={{ md: "auto", base: "100%" }}
                  alignSelf="stretch"
                >
                  <Flex
                    w="100%"
                    alignItems="center"
                    position={{ md: "absolute", base: "relative" }}
                    top="0.00px"
                    right="0px"
                    left="0px"
                    m="auto"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <Flex
                      position="relative"
                      flex={1}
                      flexDirection="column"
                      alignItems="center"
                      alignSelf="stretch"
                      style={{ width: "100%", marginLeft: "23%" }}
                    >
                      <Heading
                        size="md"
                        as="h1"
                        letterSpacing="-9.60px"
                        fontSize="128.04px"
                        // style={{ color: "white" }}
                        style={{ color: "white", fontFamily: 'DM Sans, sans-serif' }}
                        // fontFamily={}
                      >
                        Peer2Play
                      </Heading>
                      <Text
                        size="x1"
                        letterSpacing="-0.79px"
                        // fontFamily="Inter"
                        style={{ color: "white", fontFamily: 'Inter, sans-serif' }}
                      >
                        Connect, Invite, Challenge & Earn
                      </Text>
                    </Flex>
                  </Flex>
                  <Image
                    src="images/img_cursor_2.png"
                    h="200px"
                    zIndex={2}
                    w="200px"
                    position="absolute"
                    bottom="-0.01px"
                    left="0.00px"
                    m="auto"
                  />
                </Box>
                <Box
                  h="285px"
                  ml={{ md: "-3px", base: "0px" }}
                  zIndex={3}
                  alignSelf="end"
                  position="relative"
                  w={{ md: "23%", base: "100%" }}
                >
                  <Image
                    src="images/img_message_1.png"
                    h="200px"
                    w="200px"
                    position="absolute"
                    right="0.00px"
                    top="0.00px"
                    m="auto"
                  />
                </Box>
              </Flex>
            </Flex>
            <Image
              src="images/Ellipse_2.png"
              w="100%"
              style={{ marginTop: "-107px" }}
            />
          </Box>
          <Image
            src="images/img_torus_1.png"
            h="213px"
            zIndex={5}
            w="16%"
            position="absolute"
            left="7%"
            top="60%"
            m="auto"
          />
          <Image
            src="images/img_cylinder_1.png"
            h="167px"
            zIndex={6}
            w="15%"
            position="absolute"
            right="6%"
            top="61%"
            m="auto"
          />
        </Box>
      </Box>
    </div>
  );
}

export default LandingPage;
