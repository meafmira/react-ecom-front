import React from 'react';
import Router from 'react-router';
import Navbar from 'components/main/navbar';
import Sidebar from 'components/main/sidebar/sidebar';
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({

  render: function() {

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <RouteHandler />
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Layout;
