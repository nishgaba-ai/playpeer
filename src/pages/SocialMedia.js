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
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div style={{ width: "100%" }}>
      <Flex
        // mt="114px"
        gap={{ base: "33px", sm: "66px" }}
        zIndex={7}
        w={{ md: "93%", base: "100%" }}
        position="relative"
        flexDirection="column"
        alignItems="center"
        p={{ md: "", base: "20px" }}
        // style={{ marginTop: "-794px" }}
      >
        <Container px={{ md: "113px", base: "20px" }}>
          <Flex
            gap="17px"
            flexDirection="column"
            alignItems="center"
            px="5px"
            style={{ width: "100%" }}
          >
            <Heading
              letterSpacing="-3.24px"
              w={{ md: "206%", base: "100%" }}
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Connect Your Social Media
            </Heading>
            <Text
              size="xl"
              letterSpacing="-0.79px"
              textAlign="center"
              w={{ md: "86%", base: "100%" }}
              lineHeight="31px"
              style={{ color: "white" }}
            >
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </Text>
          </Flex>
        </Container>
        <Flex
          gap="16px"
          alignSelf="stretch"
          flexDirection={{ md: "row", base: "column" }}
        >
          <Image
            className="sm-window"
            src="images/Frame_124.png"
            h="159px"
            w="52%"
            ml="26%"
          />
          <Image
            className="sm-mobile"
            src="images/Frame_124.png"
            h="89px"
            w="72%"
            m="auto"
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default SocialMedia;
