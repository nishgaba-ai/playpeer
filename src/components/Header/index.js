import {
  Button,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Image,
} from "@chakra-ui/react";
import React from "react";

export default function Header({ ...props }) {
  return (
    <Flex
      {...props}
      w={{ md: "87%", base: "100%" }}
      justifyContent="space-between"
      alignItems="center"
      gap="20px"
      p="20px"
      flexDirection={{ base: "column", sm: "row" }}
      as="header"
    >
      <Image
        src="images/img_header_logo.png"
        h="51px"
        ml={{ base: "0px", sm: "25px" }}
        w="151px"
        fit="contain"
      />
      <Flex
        mr={{ base: "0px", sm: "25px" }}
        gap="24px"
        alignItems="center"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <UnorderedList
          styleType="none"
          gap="24px"
          display="flex"
          flexwrap="wrap"
        >
          <ListItem>
            <Link href="#">
              <Text color="white.A700_99" letterSpacing="-0.16px">
                About
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Text color="white.A700_99" letterSpacing="-0.16px">
                Features
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Text color="white.A700_99" letterSpacing="-0.16px">
                Help
              </Text>
            </Link>
          </ListItem>
        </UnorderedList>
        <Button
          size="xs"
          colorscheme="blue_gray_400"
          letterSpacing="-0.32px"
          fontFamily="Inter"
          fontweight={500}
          minw="143px"
          borderRadius="10px"
        >
          Connect Wallet
        </Button>
      </Flex>
    </Flex>
  );
}
