
export function ComponentA() {
  const name = "chin"
  const age = 32
  const white = "white"
  return (
    <>
      <div>
        <h3>Component A</h3>
        <ComponentB name={name} age={age} color={ white }></ComponentB>
      </div>

    </>)
}

export function ComponentB({name, age, color}) {
  return (<>
    <h3> Component B</h3>
    <p>name : {name}</p>
    <p>age : {age}</p>
    <p>color: {color}</p>
  </>)
}
