"use client";
import FormProps from "@/types/Integrated_components/FormProps";
import { Box } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

export const Form = (props: FormProps) => {
  const { children, Box_props, defaultValues, onInvalid, onValid } = props;

  const methods = useForm({ defaultValues });

  const logInput = (input: any) => console.log("input", input);

  return (
    <FormProvider {...methods}>
      <Box
        as={"form"}
        onSubmit={methods.handleSubmit(
          onValid ? onValid : logInput,
          onInvalid ? onInvalid : logInput
        )}
        {...Box_props}
      >
        {children}
      </Box>
    </FormProvider>
  );
};
