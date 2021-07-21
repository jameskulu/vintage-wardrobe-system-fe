import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
        <div>
      {/* logo */}
      <nav className="navbar navbar-expand-lg navbar-light " style={{ padding: "0 100px" }}>
        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
          <div className="logo">
          </div>
        </div>
      </nav>


      {/* nav bar */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-success" style={{ padding: "0 100px" }}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">Category</Link> </li>
            <li className="nav-item">
              <Link className="nav-link" to="/foods">Food</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/diary">Diary</Link></li>


             

            {/* dropdown menu */}

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                My Profile</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/profile">Manage Profile</Link>
                <Link className="dropdown-item" to="">Logout</Link>
              </div>
            </li>
          </ul>

        </div>
      </nav>
    </div>
    );
};

export default Header2;
