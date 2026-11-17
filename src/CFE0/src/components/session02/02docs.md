# **Session 2: State, Events & Display Components**

## State Overview
State is a component's internal, dynamic memory. When state changes, React re-renders that component and its children to reflect the new data.

| Props (Properties) | State |
| :--- | :--- |
| Passed from parent to child | Managed internally within the component |
| Read-only (Immutable) | Updated via setter function |
| Used to configure a component | Used for interactive, changing data |

```jsx
const [state, setState] = useState(initialValue);
```

### Functional Updates
Use a function `(prev) => next` when the new state depends on the previous state to avoid stale values during batched updates.

> **Sample Code Reference:** [`Counter`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/session02/State&EventHand.jsx#L4-L14) in [`State&EventHand.jsx`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/session02/State&EventHand.jsx)
```jsx
// Safely increment count using previous state value
<button onClick={() => setCount((prev) => prev + 1)}>Click</button>
```

---

## Object State
In React, objects must be treated as **immutable**. Never modify object properties directly (e.g., `user.name = "..."`), because React checks reference equality (`Object.is`) and will skip re-rendering if the object reference doesn't change.

### Updating Objects with Spread (`...`)
Always create a new object by copying existing properties and adding or overriding fields.

> **Sample Code Reference:** [`ObjectStates`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/session02/State&EventHand.jsx#L17-L27) in [`State&EventHand.jsx`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/session02/State&EventHand.jsx)
```jsx
export function ObjectStates() {
  const [user, setUser] = useState({ name: "Nichi" });

  const updateUser = () => {
    // Spread existing properties + add/update 'color'
    setUser({ ...user, color: "white" });
  };

  return <button onClick={updateUser}>click</button>;
}
```

**KEY TO REMEMBER**
* Never mutate state directly (`user.color = 'white'` ❌).
* Copy existing properties with spread syntax (`setUser({ ...user, color: 'white' })` ✅).
* For state depending on previous value, use functional spread: `setUser((prev) => ({ ...prev, color: "white" }))`.

---

## Array State
Like objects, arrays are reference types. Do not use mutating methods (`push`, `pop`, `splice`, `sort`). Instead, use methods that return a fresh array.

| Operation | ❌ Avoid (Mutates) | ✅ Use (Returns New Array) |
| :--- | :--- | :--- |
| **Add** | `list.push(item)` | `[...list, item]` |
| **Remove** | `list.splice(index, 1)` | `list.filter((_, i) => i !== index)` |
| **Update** | `list[index] = newItem` | `list.map((item, i) => i === index ? newItem : item)` |
| **Reorder** | `list.sort()`, `list.reverse()` | `[...list]` (shallow copy first, then swap/sort) |

### Practical Patterns: `ToDoList`
> **Sample Code Reference:** [`ToDoList`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/task-components/ToDoList.jsx#L3-L66) in [`ToDoList.jsx`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/task-components/ToDoList.jsx)

```jsx
// 1. Add item (spread)
function addItem() {
  setList([...list, item]);
}

// 2. Remove item (filter)
function removeItem(indexToRemove) {
  setList(list.filter((_, i) => i !== indexToRemove));
}

// 3. Reorder / Swap items (copy first, then swap)
function upItem(index) {
  if (index > 0) {
    const tempList = [...list];
    [tempList[index], tempList[index - 1]] = [tempList[index - 1], tempList[index]];
    setList(tempList);
  }
}
```

**KEY TO REMEMBER**
* Spread `[...]` creates a new array for additions and reordering.
* `.filter()` generates a new array with unwanted items excluded.
* Always pass a unique `key` prop when rendering arrays with `.map()`.

---

## Conditional Rendering with State
State often dictates what UI elements appear on screen.

> **Sample Code Reference:** [`ConditionRendering`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/session02/CondRen_ListForm.jsx#L3-L27) and [`InlineCondition`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/session02/CondRen_ListForm.jsx#L29-L38) in [`CondRen_ListForm.jsx`](file:///mnt/backup/backup/projects/CommitFrontEndWS/src/CFE0/src/components/session02/CondRen_ListForm.jsx)

* **Early Return (Guard Clauses):**
  ```jsx
  if (isLoading) return <div>loading...</div>;
  if (!user || hasError) return <div>Error</div>;
  ```
* **Ternary Operator (`condition ? <A /> : <B />`):**
  ```jsx
  {isTrue ? <div>Is Good</div> : <div>Is Bad</div>}
  ```
* **Logical AND (`condition && <A />`):**
  ```jsx
  {isTrue && <div>The Journey is the Destination</div>}
  ```

---

## State Best Practices

1. **Never Mutate State Directly**: Always return new copies via spread (`...`), `.filter()`, or `.map()`. Direct mutation skips re-renders.
2. **Use Functional Updates for Dependent State**: Use `setState((prev) => prev + 1)` when the next value relies on the prior value.
3. **Avoid Redundant / Derived State**: If a value can be computed from existing props or state (e.g., `list.length`), calculate it on render instead of creating extra state.
4. **Group Related State, Separate Unrelated State**: Group values that change together; keep independent values apart (e.g., `item` input vs. `list` array in `ToDoList`).
5. **Use Stable Keys for Lists**: Avoid using array indices as keys when items can be added, deleted, or reordered. Prefer unique IDs.
6. **Lift State Up When Needed**: Place state in the closest common parent component when multiple sibling components need access to it.

## List Key
When you render a dynamic list, items can be added, removed, or reordered. React needs a reliable way to identify exactly which item changed so it can update the Real DOM efficiently without re-rendering the entire list

**Without key props on list elements in React, three main issues occur:**

* Console Warnings: React outputs a warning in your browser console during development.

* State & UI Bugs: If items are reordered, added, or deleted, React matches them by index position rather than identity. This causes input values, checkboxes, or component states to stick to the wrong rows.

*  Reduced Performance: React cannot reliably track item changes, leading to inefficient DOM updates and unnecessary re-renders.
