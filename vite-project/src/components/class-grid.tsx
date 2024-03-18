import {Grid} from "@mui/material";

export default function ClassGrid(){
  const classList = ["Anna", "Bodil", "Claes", "David", "Ella", "Fredrik", "George", "Harry", "Ilma", "Jakob", "Klara", "Lars", "Matilda", "Nora", "Oden", "Per", "Ronja", "Stina", "Tor", "Ulrika", "Vera", "Wilmer", "Ylva", "Zara", "Åsa", "Ängla", "Örjan"]

  return (
      <Grid container style={{marginTop: 50}}>
        {classList.map((name) => (
        <Grid item xs={4} sx={{borderStyle: "solid", borderColor: "white"}}>
            <h3>{name}</h3>
        </Grid>
        ))}
      </Grid>
  )
}
