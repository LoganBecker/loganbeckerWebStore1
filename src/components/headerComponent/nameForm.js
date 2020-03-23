import React, { Component } from 'react';

class NameForm1 extends Component {
  render() {
    return (
      <div className="createAccountForm">
        <h2> Sign up for an account </h2>
        <form>

        <ul>
          <li>
            <label for="fName">First Name: </label>
            <input id="fName" type="text" value="First Name" placeholder="First Name"/>
          </li>
          <li>
            <label for="lName">Last Name: </label>
            <input type="text" value="Last Name" placeholder="Last Name"/>
          </li>
          <li>
            <label for="email">Email: </label>
            <input type="text" id="email" value="yourEmail@gmail.com" placeholder="Email"/>
          </li>
          <li>
            <label for="pw">Password: </label>
            <input type="text" id="pw" value="Password" placeholder="Password"/>
          </li>
          <li>
          <label for="cpw">Confirm Password</label>
            <input type="text" id="cpw" value="Confirm Password" placeholder="Confirm Password"/>
          </li>
          <li>
            <input type="submit" value="Submit"/>

          </li>

        </ul>
        </form>

      </div>
    );
  }
}

export default NameForm1;
