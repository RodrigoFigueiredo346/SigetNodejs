import React, { useState } from 'react'
import './Todo.css'
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './components/Item'

function Todo(){
    
    const [items, setItems] = useState([])   
    
    function onAddItem(text){
        let item = new Item(text)

        setItems([...items, item])
    }
    function onDeleteItem(item){
        let filterItem = items.filter(it=>it.id !== item.id )
        setItems(filterItem)
    }

    function onDone(item){
        let updateItems = items.map(it=>{
            if(it.id===item.id){
                it.done= !it.done
            }
            return it
        })
        setItems(updateItems)
    }

    return (<div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onDone={onDone} onDeleteItem={onDeleteItem} items={items}></List>
    </div>)
}

export default Todo


