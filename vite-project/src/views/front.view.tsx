import AddStudent from "../components/add-student.component.tsx";
import ClassGrid, {ListItem} from "../components/class-grid.component.tsx";
import {useEffect, useRef, useState} from "react";
import getRandomColor from "../utils/get-random-color.util.ts";

const STORAGE_KEY="classList"
function getStateFromStorage(): ListItem[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) ||'[]')
}
export default function FrontView() {
  const [forename, setForename] = useState("")
  const [surname, setSurname] = useState("")
  const [classList, setList] = useState(getStateFromStorage())
  const myButtonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (forename === "") {
      alert("Forename cannot be empty!")
    } else if(surname === "") {
      alert("Surname cannot be empty!")
    } else {
      const capitalizedForename = forename.charAt(0).toUpperCase() + forename.slice(1).toLowerCase()
      const capitalizedSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase()
      setList([...classList, {forename: capitalizedForename, surname: capitalizedSurname, color: getRandomColor()}])
      if (myButtonRef?.current) {
        myButtonRef.current.style.backgroundColor = getRandomColor()
      }
    }
  }

  useEffect(() => {
    const list = localStorage.getItem(STORAGE_KEY)
    list ? setList(JSON.parse(list)) : '[]'
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(classList));
  }, [classList]);

  return (
    <>
      <h1>CLASS LIST</h1>
      <AddStudent onForenameChange={setForename} onSurnameChange={setSurname} onClick={handleClick} myButtonRef={myButtonRef}/>
      <ClassGrid list={classList}/>
    </>
  )
}
