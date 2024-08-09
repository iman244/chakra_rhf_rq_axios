import { FieldValues, SubmitErrorHandler, SubmitHandler } from "react-hook-form";

export default interface FormSequelActionProps<D extends FieldValues> {
    onValid?: SubmitHandler<D>;
    onInvalid?: SubmitErrorHandler<D>;
}