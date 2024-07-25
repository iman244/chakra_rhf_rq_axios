import { Text } from "@chakra-ui/react";
import { ErrorMessage as RHF_ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues } from "react-hook-form";

export const ErrorMessage = ({
  errors,
  name,
}: {
  errors: FieldErrors<FieldValues>;
  name: string;
}) => {
  return (
    <RHF_ErrorMessage
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
  );
};
