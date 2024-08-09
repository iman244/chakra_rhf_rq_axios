import { Flex, Heading } from "@chakra-ui/react";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Textarea } from "@/Integrated_components/ChakraUI/Textarea";
import { FormPresenterProps } from "@/types/FormPresenterProps";

export const TextareaForm = ({
  sequelAction,
  uiProps,
}: FormPresenterProps<any>) => {
  return (
    <Form {...sequelAction}>
      <Flex maxW={"300px"} flexDir={"column"} gap={"12px"}>
        <Heading size={"lg"} borderBottom={"1px solid gray"}>
          Textarea Form
        </Heading>
        <Textarea
          name="textareaInput"
          rules={{
            required: { value: true, message: "this field is required" },
            minLength: {
              value: 4,
              message: "length must be at least 4",
            },
          }}
          placeholder="textarea input"
          resize={"both"}
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
