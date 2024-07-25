import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "Dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        position: "relative",
      },
    },
  },
});
