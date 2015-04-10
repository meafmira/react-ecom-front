import React from 'react';
import AdministratorNavbar from 'components/administrator/administrator-navbar';
import { RouteHandler } from 'react-router';

export default class Administrator {
  constructor() {

  }

  render() {
    return (
      <div className="App">
        <AdministratorNavbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <RouteHandler />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
