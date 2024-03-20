import {Avatar} from "@mui/material";

export default function StudentDisplay({forename, surname}: {forename: string, surname: string}){
  return (
    <>
      <Avatar
        sx={{
          margin: 2,
          float: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
      }}
      >
        {forename.charAt(0)}{surname.charAt(0)}
      </Avatar>
        <h3 style={{margin: 3}}>{forename} {surname.charAt(0)}.</h3>
        <h5 style={{margin: 2}}>{forename} {surname}</h5>
    </>
  )
}
