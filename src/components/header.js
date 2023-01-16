import React from "react";
import {NavLink} from "react-router-dom";
import {Breadcrumb} from "./breadcrumb";

export default class Header extends React.Component {

  render() {
    return (
        <header className="header">
          <div className="header__wrapper">
            <div className="container header__inner">
              <NavLink to="/">
                <strong id="logo">write.it.down</strong>
              </NavLink>
              <nav>
                <ul>
                  <li>
                    <NavLink end to="/notes">Alle Notizen</NavLink>
                  </li>
                  <li>
                    <NavLink end to="/notes/new">Neue Notiz</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header__breadcrumb">
            <div className="container">
              <Breadcrumb/>
            </div>
          </div>
        </header>
    )
  }
}
