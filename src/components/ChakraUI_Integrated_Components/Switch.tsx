import {
  Switch as ChakraSwitch,
  SwitchProps,
  TextareaProps,
} from "@chakra-ui/react";
import { UseControllerProps } from "react-hook-form";
import { ComplexInput } from "./ComplexInput";

export type Integrated_SwitchProps = SwitchProps & UseControllerProps;

export const Switch = (props: Integrated_SwitchProps) => {
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
        <ChakraSwitch
          isInvalid={!!methods.formState.errors[name]}
          {...field}
          {...rest}
        />
      )}
    />
  );
};
