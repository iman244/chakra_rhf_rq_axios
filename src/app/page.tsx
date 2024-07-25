"use client";

import { Center, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Flex flexDir={"column"} gap={"24px"}>
      <Text>
        Creating infrastructure to integrate chakra ui, react hook form, react
        query and axios
      </Text>

      <Link as={NextLink} href={"/example-forms"}>
        example-forms
      </Link>
    </Flex>
  );
}
