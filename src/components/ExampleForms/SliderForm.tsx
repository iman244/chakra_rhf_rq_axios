import {
  Flex,
  Heading,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { Form } from "../ReactHookForm_Integrated_Components/Form";
import { SubmitButton } from "../ChakraUI_Integrated_Components/SubmitButton";
import { Slider } from "../ChakraUI_Integrated_Components/Slider";

export const SliderForm = () => {
  return (
    <Form
      defaultValues={{
        slider: 50,
      }}
    >
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
        <SubmitButton />
      </Flex>
    </Form>
  );
};
