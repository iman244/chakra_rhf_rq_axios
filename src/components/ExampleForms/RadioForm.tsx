import { Flex, Heading, Radio } from "@chakra-ui/react";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { RadioGroup } from "@/Integrated_components/ChakraUI/RadioGroup";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { FormPresenterProps } from "@/types/FormPresenterProps";

export const RadioForm = ({
  sequelAction,
  uiProps,
}: FormPresenterProps<any>) => {
  return (
    <Form {...sequelAction}>
      <Flex flexDirection={"column"} gap={"24px"}>
        <Heading borderBottom={"1px solid gray"} size={"lg"}>
          Radio Form
        </Heading>
        <RadioGroup name="my_radio">
          <Flex flexDir={"column"} gap={"8px"}>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
          </Flex>
        </RadioGroup>
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
