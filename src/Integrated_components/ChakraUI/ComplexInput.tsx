import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  UseControllerProps,
  UseFormReturn,
} from "react-hook-form";
import { ConnectForm } from "../ReactHookForm/ConnectForm";

type render = (
  field: ControllerRenderProps<FieldValues, string>,
  methods: UseFormReturn<FieldValues, any, undefined>
) => React.ReactElement;

type Complex_Integrated_InputProps = UseControllerProps & { render: render };

export const ComplexInput = (props: Complex_Integrated_InputProps) => {
  const {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    control,
    render,
  } = props;

  return (
    <ConnectForm>
      {(methods) => (
        <Controller
          name={name}
          rules={rules}
          defaultValue={defaultValue}
          shouldUnregister={shouldUnregister}
          disabled={disabled}
          render={({ field }) => render(field, methods)}
        />
      )}
    </ConnectForm>
  );
};
