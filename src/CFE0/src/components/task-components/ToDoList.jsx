import { useState } from "react";
import './ToDoList.css'
export default function ToDoList() {
  const [list, setList] = useState(["matulog", "kumain", "magyearn"]);
  const [item, setItem] = useState("");

  function addItem() {
    setList([...list, item]);
  }

  function removeItem(indexToRemove) {
    const updateList = list.filter((_, i) => {
      return i !== indexToRemove
    })

    setList(updateList);
  }

  function downItem(index) {
    if (index < list.length - 1) {
      const tempList = [...list];
      [tempList[index + 1], tempList[index]] =
      [tempList[index], tempList[index + 1]]
      setList(tempList)
    }
  }
  function upItem(index) {
    if (index > 0) {
      const tempList = [...list];
      [tempList[index], tempList[index - 1]] =
      [tempList[index - 1], tempList[index]]
      setList(tempList)
    }
  }

  return (
    <>
      <div className="task-list-container">
        {item}
        <div>
          <input
            type="text"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          ></input>
          <button onClick={addItem}> add </button>
        </div>
        <ol>
          {list.map((value, index) => {
            // value + 1
            return (<>
              <li key={index}>
                <p>{value}</p>
                <button onClick={() => { removeItem(index) }}>🗑️</button>
                <button onClick={() => { upItem(index)}}>⬆️</button>
                <button onClick={() => { downItem(index)}}>⬇️</button>
              </li>

            </>);
          })}
        </ol>
      </div>
    </>
  );
}
