import {TextField} from "@mui/material";

export default function NameTextfield({onChange, name} : {onChange: (name: string) => void, name: string}){
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
