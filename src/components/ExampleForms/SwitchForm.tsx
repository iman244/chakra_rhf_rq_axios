import { Flex, Heading } from "@chakra-ui/react";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Switch } from "@/Integrated_components/ChakraUI/Switch";
import { FormPresenterProps } from "@/types/FormPresenterProps";

export const SwitchForm = ({
  sequelAction,
  uiProps,
}: FormPresenterProps<any>) => {
  return (
    <Form
      {...sequelAction}
      defaultValues={{
        switch: false,
      }}
    >
      <Flex maxW={"300px"} flexDir={"column"} gap={"12px"}>
        <Heading size={"lg"} borderBottom={"1px solid gray"}>
          Switch Form
        </Heading>
        <Switch name="switch" colorScheme="red" />
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
