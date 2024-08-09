import {
  Flex,
  InputGroup,
  InputLeftAddon,
  Input as ChakraInput,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Input } from "@/Integrated_components/ChakraUI/Input";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { ComplexInput } from "@/Integrated_components/ChakraUI/ComplexInput";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { FormPresenterProps } from "@/types/FormPresenterProps";

export const InputForm = ({
  sequelAction,
  uiProps,
}: FormPresenterProps<any>) => {
  return (
    <Form {...sequelAction}>
      <Flex maxW={"300px"} flexDir={"column"} gap={"12px"}>
        <Heading size={"lg"} borderBottom={"1px solid gray"}>
          Input and complex Input Form
        </Heading>
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
        <SubmitButton
          isLoading={uiProps?.isLoading}
          isDisabled={uiProps?.isDisabled}
        >
          Submit
        </SubmitButton>
      </Flex>
    </Form>
  );
};
