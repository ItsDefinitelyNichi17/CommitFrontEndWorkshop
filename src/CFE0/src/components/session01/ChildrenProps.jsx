export function ComponentParent() {
  return (
    <ComponentChild>
      <>
        <p>HelloWorld</p> {/** This is the content of the children prop that you pass inside the Component Child */}
      </>
    </ComponentChild>)
}

//ComponentChi
export function ComponentChild( { children }) {
  return (
    <div>
      {children} {/** This will return HelloWorld */}
    </div>
  )
}
