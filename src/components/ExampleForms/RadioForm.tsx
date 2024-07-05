import { Flex, Heading, Radio } from "@chakra-ui/react";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";
import { Form } from "../ReactHookForm_Integrated_Components/Form";
import { RadioGroup } from "../ChakraUI_Integrated_Components/RadioGroup";

export const RadioForm = () => {
  return (
    <Form>
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
        <SubmitButton />
      </Flex>
    </Form>
  );
};
