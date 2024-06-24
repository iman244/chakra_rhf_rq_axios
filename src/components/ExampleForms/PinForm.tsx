import { Flex, Heading, PinInputField } from "@chakra-ui/react";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";
import { Form } from "../ReactHookForm_Integrated_Components/Form";
import { PinInput } from "../ChakraUI_Integrated_Components/PinInput";

export const PinForm = () => {
  return (
    <Form>
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
        <SubmitButton />
      </Flex>
    </Form>
  );
};
