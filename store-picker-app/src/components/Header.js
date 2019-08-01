import React from 'react';
import logo from '../logo.svg';
import { Button } from 'reactstrap';

class Header extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
          <div className="companyLogo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          </div>
          <div className="col-lg-8">
            <div className="navigation">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Test Link</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <Button color="danger">Login</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
