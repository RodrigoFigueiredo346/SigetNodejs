import React, {useState} from 'react'


function TodoForm(props){
    const [text, setText] = useState("")
    // const [items,setItems] = useState([])
   
    function handleChange(event){
        let t = event.target.value
        setText(t)
    }

    function addItem(event){
        event.preventDefault()
        if(text){
            props.onAddItem(text)
            setText("")
        }
    }
    return (
        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem}>Adicionar</button>        
        </form>
    )
}


export default TodoForm
