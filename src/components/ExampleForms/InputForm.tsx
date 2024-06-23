import {
  Flex,
  InputGroup,
  InputLeftAddon,
  Input as ChakraInput,
  Text,
} from "@chakra-ui/react";
import { Form } from "../ReactHookForm_Integrated_Components/Form";
import { Input } from "../ChakraUI_Integrated_Components/Input";
import { ComplexInput } from "../ChakraUI_Integrated_Components/ComplexInput";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";

export const InputForm = () => {
  return (
    <Form>
      <Text w={'fit-content'} mb={'12px'} borderBottom={'1px solid gray'}>Input and complex Input Form</Text>
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
  );
};
