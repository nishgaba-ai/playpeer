import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
import React, { Suspense } from "react";
import "./style.css";

import LandingPage from "pages/LandingPage";
import MobileLanding from "pages/MobileLanding";

import SocialMedia from "pages/SocialMedia";
import UserGenerated from "pages/UserGenerated";
import Mail from "pages/Mail";

const data = [
  { twitterButton: "Twitter" },
  { twitterButton: "Discord" },
  { twitterButton: "Telegram" },
];

export default function DesktopPage() {
  return (
    <div className="desktop-landing-main">
      <Helmet>
        <title>Peer2Play: Revolutionize Your Gaming Experience</title>
        <meta
          name="description"
          content="Discover PeerToPlay, a social gaming platform that transforms how you connect, play, and earn. Engage with a community-driven ecosystem leveraing P2P technology for a secure and interactive gaming adventure."
        />
      </Helmet>

      {/* main layout section */}
      <Box bg="black.900_01" w="100%">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={{ md: "110px", base: "20px" }}
        >
          {/* navigation section */}
          <Flex alignSelf="stretch" flexDirection="column" alignItems="center">
            <Header />

            {/* hero section */}
            <div style={{ width: "100%" }} className="desktop-landing">
              <LandingPage />
            </div>
            <div style={{ width: "100%" }} className="mobile-landing">
              <MobileLanding />
            </div>
          </Flex>

          {/* social media integration section */}
          <SocialMedia />
          <Box
            h="2116px"
            mt="153px"
            zIndex={8}
            w="92%"
            position="relative"
            // background={"linear-gradient(180deg, #1b58a0, #2c0075)"}
            style={{
              backgroundImage: "linear-gradient(185deg, black, #4F21A1, black)",
            }}
            width={{ md: "100%", base: "100%" }}
          >
            {/* gaming platform overview section */}
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
                className="socialGaming"
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
                        marginTop: "-80px",
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
                    PeerToPlay has the potential to revolutionize social gaming
                    by creating more interactive, community-driven, and secure
                    gaming experiences. By leveraging P2P technology, social
                    games can foster stronger player communities, encourage
                    creativity through user-generated content, and provide a
                    scalable and cost-effective platform for developers.
                    However, addressing challenges related to network
                    management, consistency, and fair play will be crucial to
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
                              Free-2-Play & Play to Earn Blockchain game. It is
                              an ideal game in the sports tycoon simulation
                              game. This game is one of the first blockchain
                              game for men and women. This Decentralized Cricket
                              League game is a half a billion dollar market with
                              global impact: video games, cricket, sports. Where
                              players can play around in Blockchain,NFT,
                              Metaverse technologies, which is another
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
                  <UserGenerated />
                  <Mail />
                </Flex>
              </Container>
            </Flex>

            {/* newsletter signup section */}

            <Image
              className="img_emojistar"
              src="images/img_emojistar_1.png"
              h="263px"
              w="263px"
              position="absolute"
              bottom="4%"
              left="59.00px"
              m="auto"
            />
            <Image
              className="img_helix2"
              src="images/img_helix2_1.png"
              h="268px"
              w="268px"
              position="absolute"
              bottom="-95"
              right="74px"
              m="auto"
              style={{ marginBottom: "30px" }}
            />
          </Box>
          {/* footer section */}

          <hr
            style={{
              width: "100%",
              borderTop: "1px solid grey",
              position: "absolute",
              bottom: 160,
            }}
          />
          <Footer />
        </Flex>
      </Box>
    </div>
  );
}
