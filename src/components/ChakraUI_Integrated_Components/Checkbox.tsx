import { Checkbox as ChakraCheckbox, CheckboxProps } from "@chakra-ui/react";
import { UseControllerProps } from "react-hook-form";
import { ComplexInput } from "./ComplexInput";

type IntegratedCheckBoxProps = CheckboxProps & UseControllerProps;

export const Checkbox = (props: IntegratedCheckBoxProps) => {
  const {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    control,
    ...rest
  } = props;

  // console.log("defaultValue", name, defaultValue)

  const controllerProps = {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    control,
  };

  console.log("we are in checkbox");

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
