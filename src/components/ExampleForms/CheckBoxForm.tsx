import React from "react";
import { Form } from "../ReactHookForm_Integrated_Components/Form";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";
import {
  CheckboxGroup,
  Flex,
  Checkbox as ChakraCheckbox,
  Stack,
} from "@chakra-ui/react";
import { Checkbox } from "../ChakraUI_Integrated_Components/Checkbox";
import { ComplexInput } from "../ChakraUI_Integrated_Components/ComplexInput";

export const CheckBoxForm = () => {
  return (
    <Form
      defaultValues={{
        newsletter: true,
        test_checkbox: ["naruto", "kakashi"],
      }}
    >
      <Flex flexDir={"column"} gap={"12px"}>
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
        <SubmitButton />
      </Flex>
    </Form>
  );
};
