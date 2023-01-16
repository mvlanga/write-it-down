import React from "react";

export default class Footer extends React.Component {

  render() {
    return (
        <footer>
          <div className="container">
            <nav>
              <ul>
                <li>
                  <small>© {(new Date().getFullYear())} write.it.down</small>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
    )
  }
}