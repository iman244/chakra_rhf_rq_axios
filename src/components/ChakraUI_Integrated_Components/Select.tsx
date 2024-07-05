import { UseControllerProps } from "react-hook-form";
import { ComplexInput } from "./ComplexInput";
import ReactSelect, { Props as ReactSelectProps } from "react-select";

export type Integrated_ReactSelectProps = ReactSelectProps & UseControllerProps;

export const Select = (props: Integrated_ReactSelectProps) => {
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
      render={(field, methods) => <ReactSelect {...field} {...rest} />}
    />
  );
};
