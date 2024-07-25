import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { fonts } from "./fonts";
import { Center, ColorModeScript } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import { ColorMode } from "@/components/ColorMode";

export const metadata: Metadata = {
  title: "Integrated Next App",
  description:
    "integration between chakra ui, react hook form, react query and axios power by nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Center as="main" padding={"48px"} flexDir={"column"} gap={"24px"}>
            <ColorMode />
            {children}
          </Center>
        </Providers>
      </body>
    </html>
  );
}
