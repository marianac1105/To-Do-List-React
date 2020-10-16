import React, {useState} from  "react"
import ListItem from "./ListItem"

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

  const {list} = item
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
            {list.map(textItem => {
                return <ListItem
                text = {textItem} />
            
            })
            }
            </ul>
          </div>
        </div>
      );
}