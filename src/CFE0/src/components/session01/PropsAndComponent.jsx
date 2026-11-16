
/**
  Props:
  Read-only properties that are shared between components, it is similar to passing data between components.
  A parent component can pass props to their children.
 */
export function ComponentA() {
  const name = "chin"
  const age = 32
  const white = "white"
  return (
    <>
      <div>
        <h3>Component A</h3>
        <ComponentB name={name} age={age} color={ white }></ComponentB> {/** Passing Props from components */}
      </div>
    </>)
}

export function ComponentB({ name, age, color = "black" }) { // you can override the prop propeties here as their default vlaue
  // Receiving Props
  return (<>
    <h3> Component B</h3>
    <p>name : {name}</p>
    <p>age : {age}</p>
    <p>color: {color}</p>
  </>)
}
