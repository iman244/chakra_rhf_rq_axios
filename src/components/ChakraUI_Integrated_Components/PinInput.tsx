import { Box, BoxProps, PinInput as ChakraPinInput, PinInputField, PinInputProps } from "@chakra-ui/react";
import {
  UseControllerProps,
} from "react-hook-form";
import { ComplexInput } from "./ComplexInput";

export type IntegratedInputProps = PinInputProps & UseControllerProps & { _container?: BoxProps };

export const PinInput = (props: IntegratedInputProps) => {
  const {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    control,
    _container,
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
        <Box {..._container}>
          <ChakraPinInput isInvalid={!!methods.formState.errors[name]} {...field} {...rest} >
            {children}
          </ChakraPinInput>
        </Box>
      )}
    />
  );
};
