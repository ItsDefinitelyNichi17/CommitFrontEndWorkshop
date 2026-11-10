# Components
Component is an independent, reusable building block of the user interface
## Anatomy of a Component
```jsx
export function ComponentParent() { 
  return ({
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  })
}
```
**KEY TO REMEMBER**
* Component should always return one html tag
* Component can be reuse anywhere
* The building block of react (like lego blocks)

  <br>
  <br>


# PROPS
Props are read-only data passed from a parent component to a child component (like passing arguments to a function)

## Anatomy of Props
```jsx
// 1. Parent Component (Passing Props)
export function ComponentParent() {
  const name = "chin"
  const age = 32

  return (
    <ComponentChild name={name} age={age} />
  )
}

// 2. Child Component (Receiving Props)
export function ComponentChild({ name, age, color = "black" }) {
  return (
    <>
      <h3>Child Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Color: {color}</p>
    </>
  )
}
```

## Children Prop
```jsx
// Passing elements inside component tags
export function ComponentParent() {
  return (
    <ComponentChild>
      <p>HelloWorld</p>
    </ComponentChild>
  )
}

// Receiving elements via { children }
export function ComponentChild({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}
```

**KEY TO REMEMBER**
* Props are **read-only** (immutable — children cannot modify them directly)
* Data flows in one direction: **Parent to Child** (unidirectional)
* You can assign default values (e.g. `color = "black"`)
* Props make components dynamic and reusable
* Use `{ children }` to render content nested inside component tags

<br>

Check [here](../src/components/) for the component codes and props code
