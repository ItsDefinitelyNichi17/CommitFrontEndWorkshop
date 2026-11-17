import { ComponentA, ComponentB } from './components/session01/PropsAndComponent.jsx'
import { ComponentParent } from './components/session01/ChildrenProps.jsx'
import { ConditionRendering, InlineCondition } from './components/session02/CondRen_ListForm.jsx'
import { Counter, ObjectStates} from './components/session02/State&EventHand.jsx'
import './App.css'
import ToDoList from './components/task-components/ToDoList.jsx'

function App() {
  return (
    <>
      <div className="root-wrapper">
        <ObjectStates/>
      </div>
    </>
  )
}
export default App
