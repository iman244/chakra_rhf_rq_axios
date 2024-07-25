import { Flex, Heading } from "@chakra-ui/react";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Textarea } from "@/Integrated_components/ChakraUI/Textarea";

export const TextareaForm = () => {
  return (
    <Form>
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
        <SubmitButton />
      </Flex>
    </Form>
  );
};
