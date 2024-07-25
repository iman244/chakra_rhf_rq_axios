import { Center, Spinner, Text } from "@chakra-ui/react";
import { UseQueryResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export const QueryHandler = ({
  children,
  q,
  error,
}: {
  children: (data: any) => React.ReactElement;
  q: UseQueryResult<AxiosResponse<any, any>, AxiosError<unknown, any>> | null;
  error?: (error: AxiosError<unknown, any>) => React.ReactElement;
}) => {
  if (!q || q.isLoading) {
    return (
      <Center w={"fit-content"} h={"fit-content"}>
        <Spinner size={"sm"} />
      </Center>
    );
  }

  if (q.isError && q.error != undefined) {
    if (q.error != undefined && error) {
      return error(q.error);
    }
    return (
      <Text colorScheme="red">{`error happend in ${q.error.config?.url}`}</Text>
    );
  }

  if (q.data == undefined) {
    return <Text colorScheme="red">{`axios data is undefined`}</Text>;
  }

  return children(q.data.data);
};
