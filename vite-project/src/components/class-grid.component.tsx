import {Grid} from "@mui/material";
import StudentDisplay from "./student-display.component.tsx";

export default function ClassGrid({list} : {list: { forename: string, surname: string, color: string }[]}) {
  //const sortedList = list.sort()

  /*if(list[0].forename === "") {
    return <p>List is empty</p>
  } else {*/
  return (
    <Grid container style={{marginTop: 50, width: 800}}>
      {list.map((student, i) => (
        <Grid key={i} item xs={3} sx={{borderStyle: "solid", borderColor: "white"}}>
          <StudentDisplay forename={student.forename} surname={student.surname} color={student.color}/>
        </Grid>
      ))}
    </Grid>
  )

}
