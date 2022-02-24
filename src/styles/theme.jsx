import { extendTheme, theme as base } from "@chakra-ui/react";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        boxSizing: "border-box",
        bg: "brand.grey2",
        borderColor: "brand.grey2",
        borderStyle: "solid",
        color: "brand.grey1",
        _placeholder: {
          color: "brand.grey1",
        },
        _focus: {
          bg: "brand.grey2",
          borderColor: "brand.grey0",
          color: "brand.grey0",
          _placeholder: {
            color: "brand.grey0",
          },
        },
        _hover: {
          bg: "brand.grey2",
        },
      },
    },
  },
};

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FF577F",
      primaryFocus: "#FF427F",
      primaryDisabled: "#59323F",
      grey4: "#121214",
      grey3: "#212529",
      grey2: "#343B41",
      grey1: "#868E96",
      grey0: "#F8F9FA",
      success: "#3FE864",
      error: "#E83F5B",
    },
  },
  fonts: {
    body: `Inter, sans-serif, ${base.fonts?.body}`,
  },
  styles: {
    global: {
      body: {
        bg: "brand.grey4",
      },
      
    },
  },
  components: {
    Input: { ...inputSelectStyles },
    Select: {
      color: "brand.grey2",
      _placeholder: {
        color: "brand.grey1",
      },
      ...inputSelectStyles,
    },
    Button: {
      variants: {
        primary: (props) => ({
          boxSizing: "border-box",
          bg: props.isDisabled ? "brand.primaryDisabled" : "brand.primary",
          borderColor: props.isDisabled
            ? "brand.primaryDisabled"
            : "brand.primary",
          borderStyle: "solid",
          color: "#FFF",
          _hover: {
            cursor: props.isDisabled ? "" : "pointer",
            bg: "brand.primaryFocus",
            borderColor: "brand.primaryFocus",
          },
        }),
        grey: {
          boxSizing: "border-box",
          bg: "brand.grey1",
          borderColor: "brand.grey1",
          borderStyle: "solid",
          color: "#FFF",
          _hover: {
            cursor: "pointer",
            bg: "brand.grey2",
            borderColor: "brand.grey2",
          },
        },
        black: {
          boxSizing: "border-box",
          bg: "brand.grey3",
          borderColor: "brand.grey3",
          borderStyle: "solid",
          color: "#FFF",
          _hover: {
            cursor: "pointer",
            bg: "brand.grey2",
            borderColor: "brand.grey2",
          },
        },
      },
    },
    
  },
});

export default theme;
