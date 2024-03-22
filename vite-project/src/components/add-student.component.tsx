import {Box} from "@mui/material";
import NameTextfield from "./name-textfield.component.tsx";
import {RefObject} from "react";

export default function AddStudent({onForenameChange, onSurnameChange, onClick, myButtonRef} : {onForenameChange: (forename: string) => void, onSurnameChange: (surname: string) => void, onClick: () => void, myButtonRef: RefObject<HTMLButtonElement>}){
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
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
