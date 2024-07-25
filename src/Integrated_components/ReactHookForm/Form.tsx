"use client";
import { Box, BoxProps } from "@chakra-ui/react";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type FormProps = {
  Box_props?: BoxProps;
  mutation_props: UseMutationOptions<any, AxiosError<any, any>, any, unknown>;

  onValid?: SubmitHandler<FieldValues>;
  onInvalid?: SubmitErrorHandler<FieldValues>;
  defaultValues?: any;

  children: ({ isLoading }: { isLoading: boolean }) => React.ReactElement;
};

export const Form = (props: FormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    children,
    Box_props,
    mutation_props,
    defaultValues,
    onInvalid,
    onValid,
  } = props;

  const methods = useForm({ defaultValues });

  const mutation = useMutation({
    onSettled: () => setIsLoading(false),
    ...mutation_props,
  });

  return (
    <FormProvider {...methods}>
      <Box
        as={"form"}
        onSubmit={methods.handleSubmit(
          onValid
            ? (data) => {
                setIsLoading(true);
                var d = onValid(data);
                if (d) mutation.mutate(d);
              }
            : (data: any) => {
                setIsLoading(true);
                console.log("data", data);
                mutation.mutate(data);
              },
          onInvalid
            ? onInvalid
            : (errors: any) => {
                console.log("errors", errors);
              }
        )}
        {...Box_props}
      >
        {children({ isLoading })}
      </Box>
    </FormProvider>
  );
};
