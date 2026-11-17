import { ComponentA, ComponentB } from './components/session01/PropsAndComponent.jsx'
import { ComponentParent } from './components/session01/ChildrenProps.jsx'
import { ConditionRendering, InlineCondition } from './components/session02/CondRen_ListForm.jsx'
import { Counter, ObjectStates} from './components/session02/State&EventHand.jsx'
import './App.css'
import ToDoList from './components/task-components/ToDoList.jsx'
import { EventHandlers } from './components/session02/EventHandling.jsx'
import { ComponentsControlls } from './components/session02/Forms.jsx'

function App() {
  return (
    <>
      <div className="root-wrapper">
        <ConditionRendering isLoading={false}
          user="Jensen Huang"
          hasError={false}
          image/>
      </div>
    </>
  )
}
export default App
