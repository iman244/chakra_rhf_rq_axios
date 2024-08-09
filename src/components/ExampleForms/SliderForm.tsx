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
import { FormPresenterProps } from "@/types/FormPresenterProps";

export const SliderForm = ({
  sequelAction,
  uiProps,
}: FormPresenterProps<any>) => {
  return (
    <Form
      {...sequelAction}
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
