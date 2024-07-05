import { Flex, Heading } from "@chakra-ui/react";
import { Form } from "../ReactHookForm_Integrated_Components/Form";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";
import { Switch } from "../ChakraUI_Integrated_Components/Switch";

export const SwitchForm = () => {
  return (
    <Form
      defaultValues={{
        switch: false,
      }}
    >
      <Flex maxW={"300px"} flexDir={"column"} gap={"12px"}>
        <Heading size={"lg"} borderBottom={"1px solid gray"}>
          Switch Form
        </Heading>
        <Switch name="switch" colorScheme="red" />
        <SubmitButton />
      </Flex>
    </Form>
  );
};
