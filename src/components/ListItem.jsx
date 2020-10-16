import React, { useState } from "react"

export default function ListItem (props){
const [isClicked, setClick] = useState(false)

    function checkListHandler (){

        if(!isClicked){
            setClick(true)

        }else{setClick(false)}
        

    }
// return <div>
{/* <input type="checkbox" id="scales" name="scales" onClick = {checkListHandler} 
        />
<label for="scales" style = {isClicked?{textDecoration:"line-through"}: null}>{props.text}</label>
</div> */}

return <li onClick = {checkListHandler} style = {isClicked?{textDecoration:"line-through"}: null}>{props.text}</li>
}