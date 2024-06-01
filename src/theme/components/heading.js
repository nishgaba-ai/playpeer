const basestyle = {
  color: "white.A700",
  fontFamily: "DM Sans",
};
const sizes = {
  s: {
    fontSize: {
      md: "54px",
      base: "40px",
      sm: "46px",
    },
    fontweight: 700,
  },
  md: {
    fontSize: {
      md: "128px",
      base: "48px",
    },
    fontweight: 700,
  },
  xs: {
    fontSize: "18px",
    fontweight: 700,
  },
};
const defaultProps = {
  size: "s",
};
const Heading = {
  basestyle,
  sizes,
  defaultProps,
};

export default Heading;
