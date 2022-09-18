import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    green: {
      500: "#8CC63F",
    },
    white: {
      300: "#FFFF",
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
        fontFamily: "Montserrat, sans-serif",
      },
    },
  },
});
