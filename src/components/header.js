import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
      <div id="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cep/61940620">CEP</Link>
          </li>
        </ul>
      </div>
    );
  };

export default Header;