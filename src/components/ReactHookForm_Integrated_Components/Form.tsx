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
}) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          props.onValid ? props.onValid : () => {},
          props.onInvalid
        )}
      >
        {props.children}
      </form>
    </FormProvider>
  );
};
