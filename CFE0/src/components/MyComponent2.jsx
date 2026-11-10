export function ComponentParent() {
  return (
    <ComponentChild>
      <div>
        <p>HelloWorld</p>
      </div>
    </ComponentChild>)
}
export function ComponentChild( { children }) {
  return (
    <div>{children}</div>
  )
}
