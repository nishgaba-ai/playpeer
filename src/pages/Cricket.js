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
function Cricket() {
  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
        <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
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
                   
                      
                      style={{ color: "white", fontFamily: 'DM Sans, sans-serif' ,textAlign: "center"}}
                    
                    fontWeight={300}
                  >
                    Decentralized
                  </Heading>
                  <Heading
                    letterSpacing="-0.24px"
                    // w={{ md: "206%", base: "100%" }}
                    style={{ color: "white", fontFamily: 'DM Sans, sans-serif' ,textAlign: "center"}}
                    fontWeight={300}
                  >
                    Cricket League
                  </Heading>
                  <Text
                    size="lg"
                    w={{ md: "89%", base: "100%" }}
                    lineHeight="108.19%"
                   
                    style={{ color: "white", fontFamily: 'Inter'}}
                  >
                    Free-2-Play & Play to Earn Blockchain game. It is an ideal
                    game in the sports tycoon simulation game. This game is one
                    of the first blockchain game for men and women. This
                    Decentralized Cricket League game is a half a billion dollar
                    market with global impact: video games, cricket, sports.
                    Where players can play around in Blockchain,NFT, Metaverse
                    technologies, which is another multi-billion dollar
                    industry.
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
                        style={{  fontFamily: 'Inter, sans-serif' }}
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
    </div>
  );
}

export default Cricket;
