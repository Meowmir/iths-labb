import AddStudent from "../components/add-student.component.tsx";
import ClassGrid from "../components/class-grid.component.tsx";
import {useEffect, useState} from "react";

export default function FrontView() {
  const [forename, setForename] = useState("")
  const [surname, setSurname] = useState("")
  const [classList, setList] = useState([{forename: "", surname: ""}])

  const handleClick = () => {
    if (forename === "") {
      alert("Forename cannot be empty!")
    } else if(surname === "") {
      alert("Surname cannot be empty!")
    } else {
      const capitalizedForename = forename.charAt(0).toUpperCase() + forename.slice(1).toLowerCase()
      const capitalizedSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase()
      setList([...classList, {forename: capitalizedForename, surname: capitalizedSurname}])
    }
  }

  useEffect(() => {
    const list = localStorage.getItem('classList')
    list ? setList(JSON.parse(list)) : '[]'
  }, [])

  useEffect(() => {
    window.localStorage.setItem('classList', JSON.stringify(classList));
  }, [classList]);


  return (
    <>
      <h1>CLASS LIST</h1>
      <AddStudent onForenameChange={setForename} onSurnameChange={setSurname} onClick={handleClick}/>
      <ClassGrid list={classList}/>
    </>
  )
}
