import { Flex, Heading } from "@chakra-ui/react";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";
import { Form } from "../ReactHookForm_Integrated_Components/Form";

export const SelectForm = () => {
  return (
    <Form>
      <Flex flexDir={"column"} gap={"12px"}>
        <Heading borderBottom={"1px solid gray"} size={"lg"}>
          React Select Form
        </Heading>
        <SubmitButton />
      </Flex>
    </Form>
  );
};
