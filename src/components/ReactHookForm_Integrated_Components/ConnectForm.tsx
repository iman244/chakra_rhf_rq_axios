"use client";

import { FieldValues, UseFormReturn, useFormContext } from "react-hook-form";

export const ConnectForm = ({
  children,
}: {
  children: (
    methods: UseFormReturn<FieldValues, any, undefined>
  ) => React.ReactElement;
}) => {
  const methods = useFormContext();

  return children(methods);
};
