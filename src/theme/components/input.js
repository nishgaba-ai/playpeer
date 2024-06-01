import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  field: {
    cursor: "text",
    color: "white.A700_7f",
    letterSpacing: "-0.32px",
    fontFamily: "Inter",
    fontweight: 500,
    bg: "white.A700_33",
    flexGrow: 1,
    borderRadius: "10px",
  },
});

const sizes = {
  xs: defineStyle({
    field: {
      fontSize: "16px",
      height: "42px",
      px: "12px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700_33: {
        field: {
          bg: "white.A700_33",
          color: "white.A700_7f",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["white_A700_33"];
  }),
};
const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Input;
