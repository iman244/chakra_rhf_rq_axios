import { Box, BoxProps, PinInput as ChakraPinInput, PinInputField, PinInputProps } from "@chakra-ui/react";
import {
  UseControllerProps,
} from "react-hook-form";
import { ComplexInput } from "./ComplexInput";

export type Integrated_PinInputProps = PinInputProps & UseControllerProps & { _container?: BoxProps };

export const PinInput = (props: Integrated_PinInputProps) => {
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
