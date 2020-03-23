import React, {Component} from 'react';



class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">My Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
