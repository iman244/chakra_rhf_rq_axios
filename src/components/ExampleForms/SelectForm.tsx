import { Flex, Heading } from "@chakra-ui/react";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { Select } from "@/Integrated_components/ChakraUI/Select";
import { FormPresenterProps } from "@/types/FormPresenterProps";

export const SelectForm = ({
  sequelAction,
  uiProps,
}: FormPresenterProps<any>) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Form {...sequelAction}>
      <Flex flexDir={"column"} gap={"12px"}>
        <Heading borderBottom={"1px solid gray"} size={"lg"}>
          React Select Form
        </Heading>
        <Select name="myselect" options={options} />
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
