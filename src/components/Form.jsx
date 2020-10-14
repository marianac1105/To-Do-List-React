import React, {useState} from  "react"

export default function Form (){
    const [item, setItem] = useState({currentItem: "",
list: []})

  function saveItem (e) {
    const {value} = e.target
    setItem(prevValue => {
      return {
        currentItem: value,
        list: prevValue.list
      }
    })
  }

  function addListItem () {
    setItem({
      currentItem: "",
      list:[...item.list, item.currentItem]})
    
  }

    return (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="form">
            <input onChange = {saveItem} type="text" value={item.currentItem}/>
            <button onClick = {addListItem}>
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
            {item.list.map(props => {
                return <li>{props} </li>
            })
            }
            </ul>
          </div>
        </div>
      );
}