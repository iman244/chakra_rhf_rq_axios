import { BoxProps } from "@chakra-ui/react";
import FormSequelActionProps from "./FormSequelActionProps";

type FormProps = FormSequelActionProps<any> & {
    Box_props?: BoxProps;
    children: any;
    defaultValues?: any
  };


export default FormProps