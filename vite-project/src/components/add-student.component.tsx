import {Box} from "@mui/material";
import NameTextfield from "./name-textfield.component.tsx";
import {AddStudentProps} from "../types.ts";

export default function AddStudent({onForenameChange, onSurnameChange, onClick, myButtonRef} : AddStudentProps) {
  return (
    <>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <NameTextfield onChange={onForenameChange} name={"Forename"}/>
        <NameTextfield onChange={onSurnameChange} name={"Surname"}/>
        <div>
          <button
            ref={myButtonRef}
            onClick={onClick}
          >
            Add
          </button>
        </div>
      </Box>
    </>
  )
}
