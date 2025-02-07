import { useState } from "react";
import { useController } from "react-hook-form";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { PasswordInputType } from "@/types/inputTypes";

const RenderPasswordInput = ({ input }: { input: PasswordInputType }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name: input.name,
    control: input.control,
    rules: input.rules ?? {},
    defaultValue: input?.props?.defaultValue ?? "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl error={!!error} fullWidth>
      <InputLabel>{input.label}</InputLabel>
      <OutlinedInput
        label={input.label}
        name={field.name}
        inputRef={field.ref}
        value={String(field.value)}
        type={showPassword ? "text" : "password"}
        onChange={field.onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOffTwoToneIcon /> : <VisibilityTwoToneIcon />}
            </IconButton>
          </InputAdornment>
        }
        {...input.props}
      />
      {!!error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default RenderPasswordInput;
