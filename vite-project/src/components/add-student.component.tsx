import {Box, Button, TextField} from "@mui/material";

export default function AddStudent({onForenameChange, onSurnameChange, onClick} : {onForenameChange: (forename: string) => void, onSurnameChange: (surname: string) => void, onClick: () => void}){
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <TextField
          label="Forename"
          variant="outlined"
          color="primary"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
          }}
          onChange={(forename) => onForenameChange(forename.target.value)}
        />
        <TextField
          label="Surname"
          variant="outlined"
          color="primary"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            marginLeft: 1
          }}
          onChange={(surname) => onSurnameChange(surname.target.value)}
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
