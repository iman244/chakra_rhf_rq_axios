import { Flex, Heading } from "@chakra-ui/react";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { Select } from "@/Integrated_components/ChakraUI/Select";

export const SelectForm = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Form>
      {({ isLoading }) => (
        <Flex flexDir={"column"} gap={"12px"}>
          <Heading borderBottom={"1px solid gray"} size={"lg"}>
            React Select Form
          </Heading>
          <Select name="myselect" options={options} />
          <SubmitButton isLoading={isLoading} isDisabled={isLoading} />
        </Flex>
      )}
    </Form>
  );
};
