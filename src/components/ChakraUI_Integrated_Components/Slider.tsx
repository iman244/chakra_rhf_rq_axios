import {
  Slider as ChakraSlider,
  SliderProps,
} from "@chakra-ui/react";
import { UseControllerProps } from "react-hook-form";
import { ComplexInput } from "./ComplexInput";

export type Integrated_SliderProps = SliderProps & UseControllerProps;

export const Slider = (props: Integrated_SliderProps) => {
  const {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    control,
    children,
    ...rest
  } = props;

  const controllerProps = {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    control,
  };

  return (
    <ComplexInput
      {...controllerProps}
      render={(field, methods) => (
        <ChakraSlider
          isInvalid={!!methods.formState.errors[name]}
          {...field}
          {...rest}
        >
          {children}
        </ChakraSlider>
      )}
    />
  );
};
