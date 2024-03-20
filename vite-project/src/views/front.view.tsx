import AddStudent from "../components/add-student.component.tsx";
import ClassGrid from "../components/class-grid.component.tsx";
import {useEffect, useState} from "react";

export default function FrontView() {
  const [newStudent, setNewStudent] = useState<string>("")
  const [classList, setList] = useState<string[]>([])

  const handleClick = () => {
    if (newStudent === "") {
      alert("Name cannot be empty!")
    } else {
      const capitalizedName = newStudent.charAt(0).toUpperCase() + newStudent.slice(1).toLowerCase()
      setList([...classList, capitalizedName])
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
      <AddStudent onChange={setNewStudent} onClick={handleClick}/>
      <ClassGrid list={classList}/>
    </>
  )
}
