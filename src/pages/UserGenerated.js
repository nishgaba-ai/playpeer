// import React from "react";
// import {
//   Image,
//   Button,
//   Input,
//   Flex,
//   Text,
//   Heading,
//   IconButton,
//   SimpleGrid,
//   Container,
//   Box,
// } from "@chakra-ui/react";

// function UserGenerated() {
//   return (
//     <div>
//       <Heading as="h3" letterSpacing="-3.24px" style={{ color: "white" }}>
//         User Generated Content{" "}
//       </Heading>

//       <SimpleGrid
//         width={"150%"}
//         mt="52px"
//         alignSelf="stretch"
//         gap="51px"
//         columns={{ md: 2, base: 1 }}
//         justifyContent="center"
//         style={{ marginLeft: "-150px" }}
//       >
//         <Flex
//           gap="18px"
//           borderwidth="1px"
//           borderstyle="solid"
//           bg="black.900"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           w="100%"
//           p={{ base: "20px", sm: "32px" }}
//           borderRadius="8px"
//           border={`1px solid grey`}
//           sx={{
//             "border-image": "linear-gradient(180deg, #1b58a0,#2c0075) 1",
//           }}
//         >
//           <IconButton
//             icon={<Image src="images/Frame_21.png" />}
//             aria-label="11:202;4006:882-Icons Image"
//             w="47px"
//             borderRadius="8px"
//           />
//           <Heading
//             size="xm"
//             as="h4"
//             letterSpacing="-0.56px"
//             style={{ color: "white" }}
//           >
//             INFLUENCERS OR USER MANAGED TOURNAMETS
//           </Heading>
//         </Flex>
//         <Flex
//           border={`1px solid grey`}
//           gap="18px"
//           borderwidth="1px"
//           borderstyle="solid"
//           bg="black.900"
//           w="100%"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           p={{ base: "20px", sm: "32px" }}
//           borderRadius="8px"
//           sx={{
//             "border-image": "linear-gradient(180deg, #1b58a0, #2c0075) 1",
//           }}
//         >
//           <IconButton
//             icon={<Image src="images/Frame_21.png" />}
//             aria-label="11:203;4006:882-Icons Image"
//             w="47px"
//             borderRadius="8px"
//           />
//           <Heading
//             size="xm"
//             as="h5"
//             letterSpacing="-0.56px"
//             style={{ color: "white" }}
//           >
//             USERS GENERATED CONTENTS
//           </Heading>
//         </Flex>
//         <Flex
//           border={`1px solid grey`}
//           gap="19px"
//           borderwidth="1px"
//           borderstyle="solid"
//           bg="black.900"
//           w="100%"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           p={{ base: "20px", sm: "30px" }}
//           borderRadius="8px"
//           sx={{
//             "border-image": "linear-gradient(180deg, #1b58a0, #2c0075) 1",
//           }}
//         >
//           <IconButton
//             icon={<Image src="images/Frame_21.png" />}
//             aria-label="11:201;4006:882-icons_one"
//             w="47px"
//             borderRadius="8px"
//           />
//           <Heading
//             size="xm"
//             as="h6"
//             letterSpacing="-0.56px"
//             style={{ color: "white" }}
//           >
//             Multiplayer Gaming Platform
//           </Heading>
//         </Flex>
//         <Flex w="100%" justifyContent="flex-end">
//           <Flex
//             border={`1px solid grey`}
//             gap="17px"
//             borderwidth="1px"
//             borderstyle="solid"
//             bg="black.900"
//             w="100%"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             p={{ base: "20px", sm: "31px" }}
//             borderRadius="8px"
//             sx={{
//               "border-image": "linear-gradient(180deg, #1b58a0,#2c0075) 1",
//             }}
//           >
//             <IconButton
//               icon={<Image src="images/Frame_21.png" />}
//               aria-label="11:205;4006:882-icons_one"
//               w="47px"
//               borderRadius="8px"
//             />
//             <Heading
//               size="xm"
//               as="h6"
//               letterSpacing="-0.56px"
//               style={{ color: "white" }}
//             >
//               Social Hubs
//             </Heading>
//           </Flex>
//         </Flex>
//       </SimpleGrid>
//     </div>
//   );
// }

// export default UserGenerated;

import React from "react";
import {
  Image,
  IconButton,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Container,
  Box,
} from "@chakra-ui/react";
import "./UserGenerated.css";

function UserGenerated() {
  return (
    <div style={{ width: "100%" }}>
        <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Container maxW="container.xl" p={4}>
        <Heading
          as="h3"
          letterSpacing="-3.24px"
          textAlign="center"
          color="white"
          mb={6}
          style={{  fontFamily: 'DM Sans, sans-serif' }}
        >
          User Generated Content
        </Heading>

        <SimpleGrid
          className="SimpleGrid"
          mt="52px"
          alignSelf="stretch"
          gap="51px"
          columns={{ md: 2, base: 1 }}
          justifyContent="center"
        >
          <Flex
            gap="18px"
            borderWidth="1px"
            borderStyle="solid"
            bg="black.900"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100%"
            p={{ base: "20px", sm: "32px" }}
            borderRadius="8px"
            borderColor="gray.500"
            sx={{
              borderImage: "linear-gradient(180deg, #1b58a0, #2c0075) 1",
            }}
          >
            <IconButton
              icon={<Image src="images/Frame_21.png" />}
              aria-label="11:202;4006:882-Icons Image"
              w="47px"
              borderRadius="8px"
            />
            <Heading
              size="sm"
              as="h4"
              letterSpacing="-0.56px"
              // textAlign="center"
              // color="white"
              style={{ color: "white", fontFamily: 'DM Sans, sans-serif' ,textAlign: "center"}}
            >
              INFLUENCERS OR USER MANAGED TOURNAMENTS
            </Heading>
          </Flex>

          <Flex
            gap="18px"
            borderWidth="1px"
            borderStyle="solid"
            bg="black.900"
            w="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={{ base: "20px", sm: "32px" }}
            borderRadius="8px"
            borderColor="gray.500"
            sx={{
              borderImage: "linear-gradient(180deg, #1b58a0, #2c0075) 1",
            }}
          >
            <IconButton
              icon={<Image src="images/Frame_21.png" />}
              aria-label="11:203;4006:882-Icons Image"
              w="47px"
              borderRadius="8px"
            />
            <Heading
              size="sm"
              as="h5"
              letterSpacing="-0.56px"
              style={{ color: "white", fontFamily: 'DM Sans, sans-serif' ,textAlign: "center"}}
            >
              USERS GENERATED CONTENTS
            </Heading>
          </Flex>

          <Flex
            gap="19px"
            borderWidth="1px"
            borderStyle="solid"
            bg="black.900"
            w="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={{ base: "20px", sm: "30px" }}
            borderRadius="8px"
            borderColor="gray.500"
            sx={{
              borderImage: "linear-gradient(180deg, #1b58a0, #2c0075) 1",
            }}
          >
            <IconButton
              icon={<Image src="images/Frame_21.png" />}
              aria-label="11:201;4006:882-icons_one"
              w="47px"
              borderRadius="8px"
            />
            <Heading
              size="sm"
              as="h6"
              letterSpacing="-0.56px"
              style={{ color: "white", fontFamily: 'DM Sans, sans-serif' ,textAlign: "center"}}
            >
              MULTIPLAYER GAMING PLATFORM
              {/* Multiplayer Gaming Platform */}
            </Heading>
          </Flex>

          <Flex w="100%" justifyContent="center">
            <Flex
              gap="17px"
              borderWidth="1px"
              borderStyle="solid"
              bg="black.900"
              w="100%"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={{ base: "20px", sm: "31px" }}
              borderRadius="8px"
              borderColor="gray.500"
              sx={{
                borderImage: "linear-gradient(180deg, #1b58a0, #2c0075) 1",
              }}
            >
              <IconButton
                icon={<Image src="images/Frame_21.png" />}
                aria-label="11:205;4006:882-icons_one"
                w="47px"
                borderRadius="8px"
              />
              <Heading
                size="sm"
                as="h6"
                letterSpacing="-0.56px"
                style={{ color: "white", fontFamily: 'DM Sans, sans-serif' ,textAlign: "center"}}
              >
               SOCIAL HUBS
              </Heading>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default UserGenerated;
