import React from "react";
import {
  Image,
  Button,
  Input,
  Flex,
  Text,
  Heading,
  IconButton,
  SimpleGrid,
  Container,
  Box,
} from "@chakra-ui/react";

function Gaming() {
  return (
    <div>
      <Flex
        gap={{ md: "70px", base: "35px", sm: "52px" }}
        w="100%"
        flexDirection="column"
        alignItems="center"
        position="absolute"
        top="0.00px"
        right="0px"
        left="0px"
        m="auto"
      >
        <Flex
          gap={{ base: "30px", sm: "60px" }}
          alignSelf="stretch"
          flexDirection="column"
          alignItems="center"
        >
          <Flex
            gap="11px"
            w={{ md: "81%", base: "100%" }}
            flexDirection="column"
            p={{ md: "", base: "20px" }}
          >
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
              px={{ md: "128px", base: "20px" }}
            >
              {/* <Heading letterSpacing="-3.24px">
                      A Social Gaming Platform
                    </Heading> */}
              <Heading
                letterSpacing="-3.24px"
                w={{ md: "206%", base: "100%" }}
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "-50px",
                }}
              >
                A Social Gaming Platform
              </Heading>
            </Container>
            <Text
              size="x1"
              letterSpacing="-0.79px"
              textAlign="center"
              lineHeight="31px"
              style={{ color: "white" }}
            >
              PeerToPlay has the potential to revolutionize social gaming by
              creating more interactive, community-driven, and secure gaming
              experiences. By leveraging P2P technology, social games can foster
              stronger player communities, encourage creativity through
              user-generated content, and provide a scalable and cost-effective
              platform for developers. However, addressing challenges related to
              network management, consistency, and fair play will be crucial to
              fully realize the potential of PeerToPlay in social gaming.
            </Text>
          </Flex>
          <Flex
            boxShadow="xs"
            w={{ md: "85%", base: "100%" }}
            borderRadius="50px"
            // p={{ md: "", base: "20px" }}
          >
            <Box
              borderColor="deep_purple.900"
              borderwidth="1px"
              borderstyle="solid"
              w="100%"
              borderRadius="50px"

              // background={"linear-gradient(180deg, #1b58a0, #2c0075)"}
            >
              <Box h="726px" position="relative" borderRadius="50px">
                <Image
                  src="images/img_peers_to_play_6.png"
                  h="100%"
                  w="100%"
                  position="absolute"
                  left="0px"
                  bottom="0px"
                  right="0px"
                  top="0px"
                  m="auto"
                  borderRadius={"50px"}
                />
                <Image
                  src="images/cricket-ball.png"
                  h="244px"
                  w="243px"
                  position="absolute"
                  left="0.00px"
                  top="0.00px"
                  m="auto"
                  borderRadius={"50px"}
                />
                <Image
                  src="images/cricket-ball-02.png"
                  h="170px"
                  w="169px"
                  position="absolute"
                  bottom="0.00px"
                  right="0.00px"
                  m="auto"
                  borderRadius={"50px"}
                />
                <Flex
                  w="89%"
                  justifyContent="center"
                  position="absolute"
                  right="29.00px"
                  bottom="0px"
                  top="0px"
                  h="max-content"
                  my="auto"
                >
                  <Flex
                    w="100%"
                    alignItems="center"
                    flexDirection={{ md: "row", base: "column" }}
                    // background={
                    //   "linear-gradient(180deg, #1b58a0, #2c0075)"
                    // }
                  >
                    <Flex
                      zIndex={9}
                      w={{ md: "43%", base: "100%" }}
                      position="relative"
                      flexDirection="column"
                      alignItems="start"
                    >
                      {/* <Text
                              size="2x1"
                              w={{ md: "95%", base: "100%" }}
                              lineHeight="108.19%"
                            >
                              Decentralized Cricket League
                            </Text> */}
                      <Heading
                        letterSpacing="-0.24px"
                        // w={{ md: "206%", base: "100%" }}
                        style={{
                          color: "white",
                          textAlign: "center",
                        }}
                        fontWeight={300}
                      >
                        Decentralized
                      </Heading>
                      <Heading
                        letterSpacing="-0.24px"
                        // w={{ md: "206%", base: "100%" }}
                        style={{
                          color: "white",
                          textAlign: "center",
                        }}
                        fontWeight={300}
                      >
                        Cricket League
                      </Heading>
                      <Text
                        size="lg"
                        w={{ md: "89%", base: "100%" }}
                        lineHeight="108.19%"
                        color={"white"}
                      >
                        Free-2-Play & Play to Earn Blockchain game. It is an
                        ideal game in the sports tycoon simulation game. This
                        game is one of the first blockchain game for men and
                        women. This Decentralized Cricket League game is a half
                        a billion dollar market with global impact: video games,
                        cricket, sports. Where players can play around in
                        Blockchain,NFT, Metaverse technologies, which is another
                        multi-billion dollar industry.
                      </Text>
                    </Flex>
                    <Flex
                      h={{ md: "720px", base: "auto" }}
                      ml={{ md: "-218px", base: "0px" }}
                      position="relative"
                      bgImage="url(/images/img_group_2.png)"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      flex={1}
                      justifyContent="flex-end"
                      alignItems="center"
                      alignSelf="stretch"
                      borderRadius={"50px"}
                      style={{ marginRight: "-29px" }}
                    >
                      <Flex
                        mt="62px"
                        w={{ md: "64%", base: "100%" }}
                        flexDirection="column"
                        alignItems="end"
                        p={{ md: "", base: "20px" }}
                      >
                        <Image
                          src="images/img_player.png"
                          h={{ md: "663px", base: "auto" }}
                          w="100%"
                        />
                        <Flex
                        // h={{ md: "59px", base: "auto" }}
                        // mt="-16px"
                        // mr={{ md: "10px", base: "0px" }}
                        // position="relative"
                        // bgImage="url(/images/img_group_33.svg)"
                        // bgSize="cover"
                        // bgRepeat="no-repeat"
                        // alignItems="end"
                        // p="17px"
                        // background={"red"}
                        >
                          <Text
                            border={"1px solid white"}
                            size="xs"
                            mt="4px"
                            fontSize="13.72px"
                            color={"white"}
                            mb="70px"
                            p="2"
                            borderRadius={"50px"}
                          >
                            Coming Soon
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Image src="images/img_app_night.png" h="1px" w="100%" />
        </Flex>

        {/* user generated content section */}
        <Container px="0px" p={{ md: "", base: "20px" }}>
          <Flex flexDirection="column" alignItems="center">
            <Heading as="h3" letterSpacing="-3.24px" style={{ color: "white" }}>
              User Generated Content{" "}
            </Heading>

            <SimpleGrid
              width={"150%"}
              mt="52px"
              alignSelf="stretch"
              gap="51px"
              columns={{ md: 2, base: 1 }}
              justifyContent="center"
              style={{ marginLeft: "-150px" }}
            >
              <Flex
                gap="18px"
                borderwidth="1px"
                borderstyle="solid"
                bg="black.900"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                w="100%"
                p={{ base: "20px", sm: "32px" }}
                borderRadius="8px"
                border={`1px solid grey`}
                sx={{
                  "border-image": "linear-gradient(180deg, #1b58a0,#2c0075) 1",
                }}
              >
                <IconButton
                  icon={<Image src="images/Frame_21.png" />}
                  aria-label="11:202;4006:882-Icons Image"
                  w="47px"
                  borderRadius="8px"
                />
                <Heading
                  size="xm"
                  as="h4"
                  letterSpacing="-0.56px"
                  style={{ color: "white" }}
                >
                  INFLUENCERS OR USER MANAGED TOURNAMETS
                </Heading>
              </Flex>
              <Flex
                border={`1px solid grey`}
                gap="18px"
                borderwidth="1px"
                borderstyle="solid"
                bg="black.900"
                w="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={{ base: "20px", sm: "32px" }}
                borderRadius="8px"
                sx={{
                  "border-image": "linear-gradient(180deg, #1b58a0, #2c0075) 1",
                }}
              >
                <IconButton
                  icon={<Image src="images/Frame_21.png" />}
                  aria-label="11:203;4006:882-Icons Image"
                  w="47px"
                  borderRadius="8px"
                />
                <Heading
                  size="xm"
                  as="h5"
                  letterSpacing="-0.56px"
                  style={{ color: "white" }}
                >
                  USERS GENERATED CONTENTS
                </Heading>
              </Flex>
              <Flex
                border={`1px solid grey`}
                gap="19px"
                borderwidth="1px"
                borderstyle="solid"
                bg="black.900"
                w="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={{ base: "20px", sm: "30px" }}
                borderRadius="8px"
                sx={{
                  "border-image": "linear-gradient(180deg, #1b58a0, #2c0075) 1",
                }}
              >
                <IconButton
                  icon={<Image src="images/Frame_21.png" />}
                  aria-label="11:201;4006:882-icons_one"
                  w="47px"
                  borderRadius="8px"
                />
                <Heading
                  size="xm"
                  as="h6"
                  letterSpacing="-0.56px"
                  style={{ color: "white" }}
                >
                  Multiplayer Gaming Platform
                </Heading>
              </Flex>
              <Flex w="100%" justifyContent="flex-end">
                <Flex
                  border={`1px solid grey`}
                  gap="17px"
                  borderwidth="1px"
                  borderstyle="solid"
                  bg="black.900"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p={{ base: "20px", sm: "31px" }}
                  borderRadius="8px"
                  sx={{
                    "border-image":
                      "linear-gradient(180deg, #1b58a0,#2c0075) 1",
                  }}
                >
                  <IconButton
                    icon={<Image src="images/Frame_21.png" />}
                    aria-label="11:205;4006:882-icons_one"
                    w="47px"
                    borderRadius="8px"
                  />
                  <Heading
                    size="xm"
                    as="h6"
                    letterSpacing="-0.56px"
                    style={{ color: "white" }}
                  >
                    Social Hubs
                  </Heading>
                </Flex>
              </Flex>
            </SimpleGrid>
            <Flex
              mt="277px"
              mr={{ md: "64px", base: "0px" }}
              gap="15px"
              alignSelf="end"
              w={{ md: "89%", base: "100%" }}
              flexDirection="column"
              alignItems="center"
              // px={{ base: "20px", sm: "22px" }}
            >
              {/* <Heading as="h1" letterSpacing="-3.24px">
                      Get access to Subscribe
                    </Heading> */}
              <Heading
                letterSpacing="-3.24px"
                w={{ md: "206%", base: "100%" }}
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Get access to Subscribe
              </Heading>
              <Text
                color="gray.400"
                letterSpacing="-0.16px"
                textAlign="center"
                w={{ md: "78%", base: "100%" }}
                lineHeight="23px"
              >
                Celebrate the joy of accomplishment with an app designed to
                track your progress and motivate your efforts.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </div>
  );
}

export default Gaming;
