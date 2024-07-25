import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputProps,
  Text,
} from "@chakra-ui/react";
import { UseControllerProps } from "react-hook-form";
import { ComplexInput } from "./ComplexInput";
import { ErrorMessage } from "@hookform/error-message";

export type Integrated_InputProps = InputProps &
  UseControllerProps & {
    formLabel?: string;
    topError?: boolean;
    formHelper?: string;
  };

export const Input = (props: Integrated_InputProps) => {
  const {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    control,

    formLabel,
    formHelper,
    topError,
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
      render={(field, methods) => {
        const errors = methods.formState.errors;
        const isInvalid = !!errors[name];
        return (
          <FormControl isInvalid={isInvalid}>
            {formLabel && <FormLabel>{formLabel}</FormLabel>}
            {topError && (
              <FormErrorMessage>
                <ErrorMessage errors={errors} name={name} />
              </FormErrorMessage>
            )}
            {formHelper && (
              <FormHelperText mb={"4px"}>{formHelper}</FormHelperText>
            )}
            <ChakraInput isInvalid={isInvalid} {...field} {...rest} />
            {!topError && (
              <FormErrorMessage>
                <ErrorMessage errors={errors} name={name} />
              </FormErrorMessage>
            )}
          </FormControl>
        );
      }}
    />
  );
};
