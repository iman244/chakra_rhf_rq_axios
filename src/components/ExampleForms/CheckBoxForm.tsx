import {
  CheckboxGroup,
  Flex,
  Checkbox as ChakraCheckbox,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Checkbox } from "@/Integrated_components/ChakraUI/Checkbox";
import { ComplexInput } from "@/Integrated_components/ChakraUI/ComplexInput";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { FormPresenterProps } from "@/types/FormPresenterProps";

export const CheckBoxForm = ({
  sequelAction,
  uiProps,
}: FormPresenterProps<any>) => {
  return (
    <Form
      {...sequelAction}
      defaultValues={{
        newsletter: true,
        test_checkbox: ["naruto", "kakashi"],
      }}
    >
      <Flex flexDir={"column"} gap={"12px"}>
        <Heading size={"lg"} borderBottom={"1px solid gray"}>
          Checkbox Form
        </Heading>

        <Checkbox
          spacing="1rem"
          size="lg"
          colorScheme="green"
          defaultChecked
          name="newsletter"
        >
          I want to receive email for new features
        </Checkbox>
        <ComplexInput
          name="test_checkbox"
          render={(field, methods) => (
            <CheckboxGroup
              {...field}
              colorScheme="green"
              defaultValue={["naruto", "kakashi"]}
            >
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                <ChakraCheckbox value="naruto">Naruto</ChakraCheckbox>
                <ChakraCheckbox value="sasuke">Sasuke</ChakraCheckbox>
                <ChakraCheckbox value="kakashi">Kakashi</ChakraCheckbox>
              </Stack>
            </CheckboxGroup>
          )}
        />
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
