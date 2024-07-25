import { Checkbox as ChakraCheckbox, CheckboxProps } from "@chakra-ui/react";
import { UseControllerProps } from "react-hook-form";
import { ComplexInput } from "./ComplexInput";

type Integrated_CheckBoxProps = CheckboxProps & UseControllerProps;

export const Checkbox = (props: Integrated_CheckBoxProps) => {
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
        <ChakraCheckbox
          isInvalid={!!methods.formState.errors[name]}
          {...field}
          {...rest}
        />
      )}
    />
  );
};
