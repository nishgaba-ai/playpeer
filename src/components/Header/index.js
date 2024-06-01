import React, { useState } from "react";
import {
  Button,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import "./index.css";

export default function Header({ ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex {...props} as="header" className="LogoContainer">
      <div className="DLogo">
        <Image
          src="images/img_header_logo.png"
          h="51px"
          w="151px"
          fit="contain"
          ml={{ base: "0px", sm: "25px" }}
          mb={{ base: "20px", sm: "0" }}
        />
      </div>
      <div className="MLogo">
        <Image
          src="images/Default.png"
          h="51px"
          w="151px"
          fit="contain"
          ml={{ base: "0px", sm: "25px" }}
          mb={{ base: "20px", sm: "0" }}
        />
      </div>

      <Flex
        gap="24px"
        alignItems="center"
        flexDirection={{ base: "column", sm: "row" }}
        mr={{ base: "0px", sm: "25px" }}
        display={{ base: isMenuOpen ? "flex" : "none", sm: "flex" }}
      >
        <UnorderedList
          styleType="none"
          gap="24px"
          display="flex"
          flexwrap="wrap"
          m={0}
          p={0}
          flexDirection={{ base: "column", sm: "row" }}
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
          minw={{ base: "unset", sm: "143px" }}
          borderRadius="10px"
        >
          Connect Wallet
        </Button>
      </Flex>
      {/* Hamburger Menu Icon */}
      <Box
        display={{ base: "block", sm: "none" }}
        cursor="pointer"
        color="white"
        fontSize="24px"
        onClick={toggleMenu}
      >
        &#9776;
      </Box>
    </Flex>
  );
}
