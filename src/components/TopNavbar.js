import React from 'react';

const TopNavbar = () => {
    return (
        <nav className="navbar navbar-custom">
            <div className="container-fluid">
            <div className="row">
                <form className="form-inline col">
                    <input id="top-search" className="form-control mr-sm-2" type="search" placeholder="Search for tasks" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><span className="navbar-toggler-icon material-icons">search</span></button>
                </form>
                <ul className="nav col justify-content-end">
                    <li className="nav-item notifications active">
                        <span className="status"></span>
                        <a className="nav-link" href="#"><span className="material-icons">notifications_none</span>Notifications</a>
                    </li>
                    <li className="nav-item account">
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mr. Thomson <span class="material-icons">account_circle</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Add Task</a>
                        <a class="dropdown-item" href="#">Settings</a>
                        <a class="dropdown-item" href="#">Log out</a>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default TopNavbar;