import { ComponentA, ComponentB } from './components/PropsAndComponent.jsx'
import { ComponentParent} from './components/ChildrenProps.jsx'
import './App.css'

function App() {
  return (
    <>
      <ComponentA></ComponentA>
      <ComponentB name = "Elk" age = {17}></ComponentB>
      <ComponentParent></ComponentParent>
    </>
  )
}
export default App
