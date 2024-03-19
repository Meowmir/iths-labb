import {Grid} from "@mui/material";

export default function ClassGrid({list} : {list: string[]}){
  const sortedList = list.sort()

  if(list.length < 1) {
    return <p>List is empty</p>
  } else {
  return (
      <Grid container style={{marginTop: 50}}>
        {sortedList.map((name, i) => (
        <Grid key={i} item xs={4} sx={{borderStyle: "solid", borderColor: "white"}}>
            <h3>{name}</h3>
        </Grid>
        ))}
      </Grid>

  )
  }
}
