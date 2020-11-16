import React from 'react';

const Sidebar = () => {
    return (
        <section id="sidebar" className="col">
            <nav className="navbar navbar-expand-lg">
              <div className="sidebar-header">
                <a className="navbar-brand" href="#">TaskSkye</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon material-icons">menu</span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">people</span>
                      Manage <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span className="material-icons">dns</span>
                      Tasks</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">event_note</span>
                      Schedule</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">insert_chart</span>
                      Reports</a>
                  </li>
                  <li className="nav-item settings-link">
                    <a className="nav-link" href="#">
                      <span className="material-icons">settings</span>
                      Settings</a>
                  </li>
                </ul>
              </div>
            </nav>
          </section>
    );
}

export default Sidebar;