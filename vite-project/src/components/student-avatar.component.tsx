import {Avatar} from "@mui/material";
import {ListItem} from "../types.ts";

export default function StudentAvatar({forename, surname, color} : ListItem){
  return (
    <Avatar
      sx={{
        margin: 2,
        float: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color
      }}
    >
      {forename.charAt(0)}{surname.charAt(0)}
    </Avatar>
  )
}
