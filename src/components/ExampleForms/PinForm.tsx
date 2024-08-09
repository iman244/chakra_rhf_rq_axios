import { PinInput } from "@/Integrated_components/ChakraUI/PinInput";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { FormPresenterProps } from "@/types/FormPresenterProps";
import { Flex, Heading, PinInputField } from "@chakra-ui/react";

export const PinForm = ({ sequelAction, uiProps }: FormPresenterProps<any>) => {
  return (
    <Form {...sequelAction}>
      <Flex flexDirection={"column"} gap={"24px"}>
        <Heading borderBottom={"1px solid gray"} size={"lg"}>
          Pin Form
        </Heading>

        <PinInput
          name="pin"
          _container={{ display: "flex", gap: "12px" }}
          rules={{ required: { value: true, message: "you must enter pin" } }}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
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
