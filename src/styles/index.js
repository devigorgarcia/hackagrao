import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    green: {
      300: "#8CC63F",
    },
    white: {
      300: "#FFF",
    },
    orange: {
      600: "#605444",
      700: "#424242",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#171717",
        color: "#FFFF",
        fontSize: "Montserrat, sans-serif;"
      },
    },
  },
});