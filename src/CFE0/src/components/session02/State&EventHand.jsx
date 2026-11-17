import { useState } from 'react'

//States
export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style = {{display:'flex', flexDirection:"column"}}>
        <p style = {{textAlign: 'center'}}>{count} </p>
        <button onClick= {()=>{setCount((prev)=> prev + 1)}}>Click</button>
      </div>
  </>)
}

//Object Manipulation
export function ObjectStates() {
  const [user, setUser] = useState({ name: "Nichi" })

  const updateUser = () => {
    setUser({ ...user, color: "white" });
  }
  console.log(user)
  return (<>
    <button onClick = {updateUser}>click</button>
  </>)
}
