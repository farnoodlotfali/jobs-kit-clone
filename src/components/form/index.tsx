import { PropsWithChildren } from "react";
import { Grid2, GridBaseProps } from "@mui/material";

import RenderPasswordInput from "./RenderPasswordInput";
import RenderTextInput from "./RenderTextInput";
import { INPUT_TYPE } from "@/constants/inputTypes";
import { FormInputTypes } from "@/types/inputTypes";

const HandleInputType = ({ field }: { field: FormInputTypes }) => {
  switch (field.type) {
    case INPUT_TYPE.TEXT:
      return <RenderTextInput input={field} />;
    case INPUT_TYPE.PASSWORD:
      return <RenderPasswordInput input={field} />;

    default:
      return <></>;
  }
};

type FormInputsProps = {
  inputs: FormInputTypes[];
  size?: GridBaseProps["size"];
  spacing?: GridBaseProps["spacing"];
};

const FormInputs: React.FC<PropsWithChildren<FormInputsProps>> = ({
  children,
  inputs,
  size = { xs: 12 },
  spacing = 2,
}) => {
  return (
    <Grid2 container spacing={spacing}>
      {inputs.map((field, i) => (
        <Grid2 size={size} {...field.gridSize} key={field.name + " " + i}>
          <HandleInputType field={field} />
        </Grid2>
      ))}
      {children}
    </Grid2>
  );
};

export { FormInputs };
