import React from 'react';

const TaskCard = (props) => {
    return (
        <section className="portlet card">
            <div className="portlet-header card-header">
                <p className="card-label">{props.label}</p>
            </div>
            <div className="portlet-content card-body">
                <p className="card-text">{props.title}</p>
            </div>
            <div className="card-footer">
                <ul className="list-group list-group-horizontal-lg">
                    <li className="list-group-item card-message"><span className="material-icons">comment</span>{props.messages}</li>
                    <li className="list-group-item card-attach"><span className="material-icons">attachment</span>{props.attachtments}</li>
                    <li className="list-group-item card-member">
                        <svg id="Capa_1">
                            <g>
                                <circle className="st1" cx="9" cy="9" r="8.4"/>
                                <circle className="st0" cx="9" cy="6.4" r="2.3"/>
                                <path className="st0" d="M4.5,12.4c0-1.5,3-2.3,4.5-2.3s4.5,0.8,4.5,2.3v0.8h-9V12.4z"/>
                            </g>
                        </svg>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default TaskCard;