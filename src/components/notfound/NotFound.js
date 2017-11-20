import React, { Component } from 'react';
import '../../flex.css';
import './styles.css';

class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="text align">
        <h1 className="notFound white">404 Page Not Found</h1>
      </div>
    );
  }
}

export default NotFound;
