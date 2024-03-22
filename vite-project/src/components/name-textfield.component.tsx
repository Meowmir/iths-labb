import {TextField} from "@mui/material";
import {NameTextfieldProps} from "../types.ts";

export default function NameTextfield({onChange, name} : NameTextfieldProps){
  return (
    <TextField
      label={name}
      variant="outlined"
      color="primary"
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
      }}
      onChange={(name) => onChange(name.target.value)}
    />
  )
}
