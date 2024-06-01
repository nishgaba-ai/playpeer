import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "0px",
  outlineOffset: "0",
  cursor: "pointer",
  flexDirection: "row",
});

const sizes = {
  md: defineStyle({
    h: "49px",
    fontSize: "16px",
    px: "20px",
  }),
  xs: defineStyle({
    h: "39px",
    fontSize: "16px",
    px: "15px",
  }),
  lg: defineStyle({
    h: "103px",
    fontSize: "18px",
    px: "35px",
  }),
  sm: defineStyle({
    h: "47px",
    px: "15px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      blue_gray_400: {
        bg: "blue_gray.400",
        color: "white.A700",
      },
      black_900: {
        bg: "black.900",
        color: "white.A700",
      },
      white_A700: {
        bg: "white.A700",
        color: "black.900_01",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["white_A700"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "sm",
  },
});

export default Button;
