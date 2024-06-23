"use client";

import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export const Form = (props: {
  children: any;
  onValid?: SubmitHandler<FieldValues>;
  onInvalid?: SubmitErrorHandler<FieldValues>;
  defaultValues?: any
}) => {
  const { defaultValues } = props
  const methods = useForm({defaultValues});
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          props.onValid ? props.onValid : (data: any) => {
            console.log("data", data);
          },
          props.onInvalid ? props.onInvalid : (errors: any) => {
            console.log("errors", errors);
          }
        )}
      >
        {props.children}
      </form>
    </FormProvider>
  );
};
