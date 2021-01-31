

import React, { Component } from 'react';
import home from '../home.jpg';
export default class Welcome extends Component {  render() {
    return (
      <div className="row">
        <div className="home">
          <img src={home} width="1200" height="600" />
        </div>
      </div>
    );
  }
}

