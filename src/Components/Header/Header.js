import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/TodoApp">TodoApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/TodoApp">TodoApp</a>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/About">About</a>
                        </li>
                </ul>
            </div>
        </nav>
        );
  }

  export default Header;
