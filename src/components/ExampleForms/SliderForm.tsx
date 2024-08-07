import {
  Flex,
  Heading,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { SubmitButton } from "@/Integrated_components/ChakraUI/SubmitButton";
import { Form } from "@/Integrated_components/ReactHookForm/Form";
import { Slider } from "@/Integrated_components/ChakraUI/Slider";

export const SliderForm = () => {
  return (
    <Form
      defaultValues={{
        slider: 50,
      }}
    >
      {({ isLoading }) => (
        <Flex maxW={"300px"} flexDir={"column"} gap={"12px"}>
          <Heading size={"lg"} borderBottom={"1px solid gray"}>
            Slider Form
          </Heading>
          <Slider
            name="slider"
            rules={{
              required: { value: true, message: "this field is required" },
            }}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <SubmitButton isLoading={isLoading} isDisabled={isLoading}>
            Submit
          </SubmitButton>
        </Flex>
      )}
    </Form>
  );
};
