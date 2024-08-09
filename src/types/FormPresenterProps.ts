import { FieldValues } from "react-hook-form";
import FormUIProps from "./FormUIProps";
import FormSequelActionProps from "./Integrated_components/FormSequelActionProps";

export type FormPresenterProps<D extends FieldValues> = {
  uiProps?: FormUIProps;
  sequelAction?: FormSequelActionProps<D>;
};
