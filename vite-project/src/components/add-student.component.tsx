import {Box, Button} from "@mui/material";
import NameTextfield from "./name-textfield.component.tsx";

export default function AddStudent({onForenameChange, onSurnameChange, onClick} : {onForenameChange: (forename: string) => void, onSurnameChange: (surname: string) => void, onClick: () => void}){
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <NameTextfield onChange={onForenameChange} name={"Forename"}/>
        <NameTextfield onChange={onSurnameChange} name={"Surname"}/>
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
