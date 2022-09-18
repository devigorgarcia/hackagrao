import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    green: {
      300: "#8CC63F",
    },
    white: {
      300: "",
    },
    orange: {
      900: "",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#171717",
        color: "#FFFF",
      },
    },
  },
});
