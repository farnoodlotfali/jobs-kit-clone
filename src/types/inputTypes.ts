import { Control, RegisterOptions } from "react-hook-form";
import { GridBaseProps, OutlinedInputProps } from "@mui/material";

import { INPUT_TYPE } from "@/constants/inputTypes";

export type TextInputType = {
  name: string;
  label?: string;
  control: Control<any>;
  rules?: RegisterOptions;
  gridSize?: {
    size?: GridBaseProps["size"];
    offset?: GridBaseProps["offset"];
  };
  props?: Omit<OutlinedInputProps, "inputRef" | "value" | "label" | "onChange" | "error" | "name">;
};

export type PasswordInputType = TextInputType;

export type FormInputTypes =
  | (TextInputType & {
      type: INPUT_TYPE.TEXT;
    })
  | (PasswordInputType & {
      type: INPUT_TYPE.PASSWORD;
    });
