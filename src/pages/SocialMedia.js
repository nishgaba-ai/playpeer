// import React from "react";
// import x from "../assets/images/xx.png"
// import telegram from "../assets/images/tele.png"
// import discord from "../assets/images/discordd.png"
// import {
//   Image,
//   Flex,
//   Text,
//   Heading,
//   Container,
// } from "@chakra-ui/react";
// import "./SocialMedia.css";
// import { Link } from "react-router-dom";

// function SocialMedia() {
//   const handleClick = (url) => {
//     window.open(url, '_blank');
//   };
//   return (
//     <div style={{ width: "100%" }}>
//       <Flex
//         gap={{ base: "33px", sm: "66px" }}
//         zIndex={7}
//         w={{ md: "93%", base: "100%" }}
//         position="relative"
//         flexDirection="column"
//         alignItems="center"
//         p={{ md: "", base: "20px" }}
//       >
//         <Container px={{ md: "113px", base: "20px" }}>
//           <Flex
//             gap="17px"
//             flexDirection="column"
//             alignItems="center"
//             px="5px"
//             style={{ width: "100%" }}
//           >
//             <Heading
//               letterSpacing="-3.24px"
//               w={{ md: "206%", base: "100%" }}
//               style={{
//                 color: "white",
//                 textAlign: "center",
//               }}
//             >
//               Connect Your Social Media
//             </Heading>
//             <Text
//               size="xl"
//               letterSpacing="-0.79px"
//               textAlign="center"
//               w={{ md: "86%", base: "100%" }}
//               lineHeight="31px"
//               style={{ color: "white" }}
//             >
//               Enjoy customizable lists, team work tools, and smart tracking all
//               in one place. Set tasks, get reminders, and see your progress
//               simply and quickly.
//             </Text>
//           </Flex>
//         </Container>
//         <Flex
//           gap="25px"
//           flexDirection="row"
//           flexWrap="wrap"
//           justifyContent="center"
//           width="95%"
       
//         >
        
//             <Image
//             src={x}
//             alt="Twitter"
//             onClick={() => handleClick(`https://x.com/Peer2playAI`)}
//             style={{
//               height: "auto",
//               width: "20%",
//               cursor :"pointer"
//             }}
//           />
         
//           <Image
//             src={discord}
//             alt="Discord"
//             onClick={() => handleClick(`https://discord.gg/fN4MFFxC`)}
//             style={{
//               height: "auto",
//               width: "20%",
//               cursor :"pointer"
             
//             }}
//           />
//           <Image
//             src={telegram}
//             alt="Telegram"
//             // onClick={() => handleClick('')}
//             style={{
//               height: "auto",
//               width: "22%",
//               cursor :"pointer"
              
//             }}
//           />
//         </Flex>
//       </Flex>
//     </div>
//   );
// }

// export default SocialMedia;


import React from "react";
import x from "../assets/images/xx.png"

import telegram from "../assets/images/tele.png";

import discord from "../assets/images/discordd.png";

import {
  Image,
  Flex,
  Text,
  Heading,
  Container,
  Link,
} from "@chakra-ui/react";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div style={{ width: "100%" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Flex
        gap={{ base: "33px", sm: "66px" }}
        zIndex={7}
        w={{ md: "93%", base: "100%" }}
        position="relative"
        flexDirection="column"
        alignItems="center"
        p={{ md: "", base: "20px" }}
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
             
              style={{ color: "white",textAlign: "center", fontFamily: 'DM Sans, sans-serif' }}
            >
              Connect Your Social Media
            </Heading>
            <Text
              size="xl"
              letterSpacing="-0.79px"
              textAlign="center"
              w={{ md: "86%", base: "100%" }}
              lineHeight="31px"
              style={{ color: "white" , fontFamily: 'Inter, sans-serif'}}
            >
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </Text>
          </Flex>
        </Container>
        <Flex
          gap="25px"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          width="95%"
          // border= "3px solid red"
          // height="200px"
        >
          <Link href="https://x.com/Peer2playAI" isExternal>
            <Image
              src={x}
              alt="Twitter"
              style={{
                cursor: "pointer",
                height: "auto",
                maxWidth: "200px",
                width: "100%",
                margin: "10px",
              }}
            />
          </Link>
          <Link href="https://discord.gg/fN4MFFxC" isExternal>
            <Image
              src={discord}
              alt="Discord"
              style={{
                cursor: "pointer",
                height: "auto",
                maxWidth: "200px",
                width: "100%",
                margin: "10px",
              }}
            />
          </Link>
          <Link href="https://t.me/+_jN0qLddLrw0ZjY1" isExternal>
            <Image
              src={telegram}
              alt="Telegram"
              style={{
                cursor: "pointer",
                height: "auto",
                maxWidth: "200px",
                width: "100%",
                margin: "10px",
              }}
            />
          </Link>
        </Flex>
      </Flex>
    </div>
  );
}

export default SocialMedia;

