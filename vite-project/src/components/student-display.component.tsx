import StudentAvatar from "./student-avatar.component.tsx";

export default function StudentDisplay({forename, surname, color}: {forename: string, surname: string, color: string}){
  return (
    <>
      <StudentAvatar forename={forename} surname={surname} color={color}/>
        <h3 style={{margin: 3}}>{forename} {surname.charAt(0)}.</h3>
        <h5 style={{margin: 2}}>{forename} {surname}</h5>
    </>
  )
}
