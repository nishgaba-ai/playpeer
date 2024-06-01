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
function Mail() {
  return (
    <div>
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
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </Text>
      </Flex>
      <Flex
        gap="10px"
        w="33%"
        alignItems="center"
        position={{ base: "relative", sm: "absolute" }}
        bottom="-3%"
        right="0px"
        left="0px"
        m={"auto"}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Input placeholder={"name@email.com"} type="email" />
        <Button
          size="xs"
          letterSpacing="-0.32px"
          fontFamily="Inter"
          fontweight={500}
          minw="113px"
          borderRadius="10px"
          p={{ base: "20px", sm: "" }}
        >
          Get access
        </Button>
      </Flex>
    </div>
  );
}

export default Mail;
