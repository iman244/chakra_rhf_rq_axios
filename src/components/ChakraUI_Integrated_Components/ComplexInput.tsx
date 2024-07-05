import { Flex, Text } from "@chakra-ui/react";
import { ConnectForm } from "../ReactHookForm_Integrated_Components/ConnectForm";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  UseControllerProps,
  UseFormReturn,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
      {(methods) => {
        const {
          formState: { errors },
        } = methods;
        return (
          <Flex flexDir={"column"} gap={"4px"}>
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message, messages }) => {
                return (
                  <Text color={"red.300"} fontSize={"smaller"}>
                    {message}
                  </Text>
                );
              }}
            />
            <Controller
              name={name}
              rules={rules}
              defaultValue={defaultValue}
              shouldUnregister={shouldUnregister}
              disabled={disabled}
              render={({ field }) => render(field, methods)}
            />
          </Flex>
        );
      }}
    </ConnectForm>
  );
};
