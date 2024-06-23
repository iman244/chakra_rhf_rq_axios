"use client";
import { ComplexInput } from "@/components/ChakraUI_Integrated_Components/ComplexInput";
import { Input } from "@/components/ChakraUI_Integrated_Components/Input";
import { SubmitButton } from "@/components/ChakraUI_Integrated_Components/SubmitButton";
import { CheckBoxForm } from "@/components/ExampleForms/CheckBoxForm";
import { InputForm } from "@/components/ExampleForms/InputForm";
import { Form } from "@/components/ReactHookForm_Integrated_Components/Form";
import {
  Center,
  Flex,
  InputGroup,
  InputLeftAddon,
  Text,
  Input as ChakraInput,
  Divider,
} from "@chakra-ui/react";

export default function Home() {

  return (
    <Center as="main" flexDir={"column"} gap={"24px"}>
      <Text>
        Creating infrastructure to integrate chakra
        ui, react hook form, react query and axios
      </Text>

      <InputForm />
      <Divider />
      <CheckBoxForm />

    </Center>
  );
}
