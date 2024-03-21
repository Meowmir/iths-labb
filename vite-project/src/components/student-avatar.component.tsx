import {Avatar} from "@mui/material";

export default function StudentAvatar({forename, surname, color} : {forename: string, surname: string, color: string}){
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
