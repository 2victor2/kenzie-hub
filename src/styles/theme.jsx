import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FF577F",
      primaryFocus: "#FF427F",
      primaryNegative: "#59323F",
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
     body: `Inter, sans-serif, ${base.fonts?.body}` 
  },
  styles: {
    global: {
      body: {
        bg: "brand.grey4",
      },
    },
  },
  components: {
    Input: {},
    Button: {},
    
  }
});



export default theme;