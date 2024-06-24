import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps,
} from "@chakra-ui/react";
import { UseControllerProps } from "react-hook-form";
import { ComplexInput } from "./ComplexInput";

export type Integrated_RadioGroupProps = RadioGroupProps & UseControllerProps;

export const RadioGroup = (props: Integrated_RadioGroupProps) => {
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
        <ChakraRadioGroup {...field} {...rest}>
          {children}
        </ChakraRadioGroup>
      )}
    />
  );
};
