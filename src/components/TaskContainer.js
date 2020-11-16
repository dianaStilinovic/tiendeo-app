import React from 'react';
import TaskColumn from './TaskColumn';

const TaskContainer = () => {
    return (
        <div id="main-content" className="container-fluid">
            <h1>Tasks</h1>
            <div id="card-tasks" className="align-items-start">
                <div className="container-fluid">
                    <div className="row">
                        <TaskColumn id="task-backlog" title="Backlog" /> 
                        <TaskColumn id="task-in-progress" title="In progress" /> 
                        <TaskColumn id="task-review" title="Review"/> 
                        <TaskColumn id="task-complete"title="Complete" /> 
                    </div>
                </div>  
                <a href="#" className="btn btn-primary btn-add-task" role="button" aria-disabled="true"><span className="material-icons">add</span></a> 
            </div>
        </div>
    );
}

export default TaskContainer;    
            
            