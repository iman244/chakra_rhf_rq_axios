import {
  Flex,
  InputGroup,
  InputLeftAddon,
  Input as ChakraInput,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Form } from "../ReactHookForm_Integrated_Components/Form";
import { Input } from "../ChakraUI_Integrated_Components/Input";
import { ComplexInput } from "../ChakraUI_Integrated_Components/ComplexInput";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";
import { Textarea } from "../ChakraUI_Integrated_Components/Textarea";

export const TextareaForm = () => {
  return (
    <Form>
      <Flex maxW={"300px"} flexDir={"column"} gap={"12px"}>
        <Heading size={"lg"} borderBottom={"1px solid gray"}>
          Textarea Form
        </Heading>
        <Textarea
          name="textareaInput"
          rules={{
            required: { value: true, message: "this field is required" },
            minLength: {
              value: 4,
              message: "length must be at least 4",
            },
          }}
          placeholder="textarea input"
          resize={"both"}
        />
        <SubmitButton />
      </Flex>
    </Form>
  );
};
