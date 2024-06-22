import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  styles: {
    global: {
      body: {
        bg: "#181c29",
        color: 'white',
        padding: '24px'
      },
    },
  },
});
