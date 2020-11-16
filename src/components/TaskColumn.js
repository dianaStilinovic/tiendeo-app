import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({id, title}) => {
    const tasks = [{ 
        "label": "Priority", 
        "title": "Company website redesign", 
        "messages": 1, 
        "attachtments": 2, 
      }];
      
    return (
        <div id={id} className="col task-col">
            <h2>{title}</h2>
            <div className="column">
                {tasks.map((task) => (
                    <TaskCard label={task.label} title={task.title} messages={task.messages} attachtments={task.attachtments} />
                ))}
            </div>
            <div className="task-footer">
                <a href="#" className="link-add-task">Add task <span className="material-icons">add_circle_outline</span></a>
            </div>
        </div>
    );
}

export default TaskColumn;