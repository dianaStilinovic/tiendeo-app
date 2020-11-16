import React from 'react';
import Sidebar from './Sidebar';
import TaskContainer from './TaskContainer';
import TopNavbar from './TopNavbar';

const Wrapper = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar /> 
                    <div id="content" className="col">
                        <TopNavbar /> 
                        <TaskContainer /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;