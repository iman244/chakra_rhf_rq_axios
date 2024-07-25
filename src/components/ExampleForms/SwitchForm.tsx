import { Flex, Heading } from "@chakra-ui/react";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Switch } from "@/Integrated_components/ChakraUI/Switch";

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
