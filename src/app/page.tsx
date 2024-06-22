"use client";
import { ComplexInput } from "@/components/ChakraUI_Integrated_Components/ComplexInput";
import { Input } from "@/components/ChakraUI_Integrated_Components/Input";
import { SubmitButton } from "@/components/ChakraUI_Integrated_Components/SubmitButton";
import { Form } from "@/components/ReactHookForm_Integrated_Components/Form";
import {
  Center,
  Flex,
  InputGroup,
  InputLeftAddon,
  Text,
  Input as ChakraInput,
} from "@chakra-ui/react";

export default function Home() {
  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const onError = (errors: any) => {
    console.log("errors", errors);
  };

  return (
    <Center as="main" flexDir={"column"} gap={"24px"}>
      <Text>
        this project is for creating infrastructure needed for integrated chakra
        ui, react hook form, and react query and axios
      </Text>

      <Form onValid={onSubmit} onInvalid={onError}>
        <Flex maxW={"300px"} flexDir={"column"} gap={"12px"}>
          <Input
            name="name"
            rules={{
              required: { value: true, message: "this field is required" },
              minLength: {
                value: 4,
                message: "length must be at least 4",
              },
            }}
            placeholder="name"
            variant={"flushed"}
            focusBorderColor="crimson"
            errorBorderColor="pink.400"
          />
          <ComplexInput
            name="phone number"
            rules={{
              required: { value: true, message: "this field is required" },
              minLength: {
                value: 4,
                message: "length must be at least 4",
              },
            }}
            render={(field, methods) => (
              <InputGroup>
                <InputLeftAddon>+234</InputLeftAddon>
                <ChakraInput {...field} type="tel" placeholder="phone number" />
              </InputGroup>
            )}
          />
          <SubmitButton />
        </Flex>
      </Form>
    </Center>
  );
}
