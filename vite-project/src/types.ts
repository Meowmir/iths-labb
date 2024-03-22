import {RefObject} from "react";

export type AddStudentProps = {
  onForenameChange: (forename: string) => void,
  onSurnameChange: (surname: string) => void,
  onClick: () => void,
  myButtonRef: RefObject<HTMLButtonElement>
}

export type ListItem = {
  forename: string,
  surname: string,
  color: string
}

export type NameTextfieldProps = {
  onChange: (name: string) => void,
  name: string
}
