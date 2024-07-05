import { Flex, Heading } from "@chakra-ui/react";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";
import { Form } from "../ReactHookForm_Integrated_Components/Form";
import { Select } from "../ChakraUI_Integrated_Components/Select";

export const SelectForm = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Form>
      <Flex flexDir={"column"} gap={"12px"}>
        <Heading borderBottom={"1px solid gray"} size={"lg"}>
          React Select Form
        </Heading>
        <Select name="myselect" options={options} />
        <SubmitButton />
      </Flex>
    </Form>
  );
};
