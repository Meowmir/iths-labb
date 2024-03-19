import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";

export default function AddStudent(){
  const [newStudent, setNewStudent] = useState<string>("")

  const handleClick = () => {
    if (newStudent === "") {
      alert("Name cannot be empty!")
    } else {
      setNewStudent(newStudent)
    }
  }

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
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ marginLeft: 2}}
          onClick={handleClick}
        >
          Add
        </Button>
      </Box>
    </>
  )
}
