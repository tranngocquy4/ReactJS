import React from 'react'

export default function TaskList(props) {
    function clickTask() {
    }
    return (
        <div>
            {props.taskList.map(item=>(
                <div onClick={()=>clickTask()} className={`taskItem${(item.completed) ? " completed" : ""}`}>{item.taskName}</div>
            ))}
        </div>
    )
}