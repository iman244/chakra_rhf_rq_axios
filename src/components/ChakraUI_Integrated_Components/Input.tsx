import { Input as ChakraInput, Flex, InputProps, Text } from "@chakra-ui/react";
import { ConnectForm } from "../ReactHookForm_Integrated_Components/ConnectForm";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ComplexInput } from "./ComplexInput";

export type IntegratedInputProps = InputProps & UseControllerProps;

export const Input = (props: IntegratedInputProps) => {
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
