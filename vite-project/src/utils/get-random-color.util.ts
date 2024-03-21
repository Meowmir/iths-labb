import {cyan, green, indigo, pink, purple, red, teal} from "@mui/material/colors";

const avatarColors = [
  red[500],
  pink[500],
  purple[500],
  indigo[500],
  cyan[500],
  teal[500],
  green[500],
]

export default function getRandomColor(){
  const randomColor = Math.floor(Math.random() * avatarColors.length)
  return avatarColors[randomColor]
}
