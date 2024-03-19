import {Box, Button, TextField} from "@mui/material";

export default function AddStudent({onChange, onClick} : {onChange: (name: string) => void, onClick: () => void}){
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <TextField
          label="Student"
          variant="outlined"
          color="primary"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
          }}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ marginLeft: 2}}
          onClick={onClick}
        >
          Add
        </Button>
      </Box>
    </>
  )
}
