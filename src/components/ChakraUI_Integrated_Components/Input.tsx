import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import {

  UseControllerProps,
} from "react-hook-form";
import { ComplexInput } from "./ComplexInput";

export type Integrated_InputProps = InputProps & UseControllerProps;

export const Input = (props: Integrated_InputProps) => {
  const {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    control,
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
        <ChakraInput
          isInvalid={!!methods.formState.errors[name]}
          {...field}
          {...rest}
        />
      )}
    />
  );
};
