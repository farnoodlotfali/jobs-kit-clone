import { useController } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from "@mui/material";

import { TextInputType } from "@/types/inputTypes";

const RenderTextInput = ({ input }: { input: TextInputType }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: input.name,
    control: input.control,
    rules: input.rules ?? {},
    defaultValue: input?.props?.defaultValue ?? "",
  });

  return (
    <FormControl error={!!error} fullWidth>
      {!!input.label && <InputLabel>{input.label}</InputLabel>}
      <OutlinedInput
        label={input.label}
        name={field.name}
        inputRef={field.ref}
        value={String(field.value)}
        onChange={field.onChange}
        {...input.props}
      />
      {!!error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default RenderTextInput;
