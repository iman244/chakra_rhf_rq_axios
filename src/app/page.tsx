"use client";
import { CheckBoxForm } from "@/components/ExampleForms/CheckBoxForm";
import { InputForm } from "@/components/ExampleForms/InputForm";
import { PinForm } from "@/components/ExampleForms/PinForm";
import { Center, Text, Divider } from "@chakra-ui/react";

export default function Home() {
  const Forms = [<InputForm />, <CheckBoxForm />, <PinForm />];

  return (
    <Center as="main" flexDir={"column"} gap={"24px"}>
      <Text>
        Creating infrastructure to integrate chakra ui, react hook form, react
        query and axios
      </Text>

      {Forms.map((form) => (
        <>
          {form}
          <Divider />
        </>
      ))}
    </Center>
  );
}
