import React, { Component } from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';

class Skills extends Component {
  render() {
    return (
        <div>
            <h1 className="yellow text-align">Skills</h1>
            <div className="skills white flex direction-column align-items-center flex-wrap">
            <div className="flex direction-row text-align">
                <div><i className="devicon-html5-plain"></i></div>
                <div><i className="devicon-css3-plain"></i></div>
                <div><i className="devicon-sass-plain"></i></div>
                <div><i className="devicon-javascript-plain"></i></div>
                <div><i className="devicon-jquery-plain"></i></div>
            </div>   
            <div className="flex direction-row text-align"> 
                <div><i className="devicon-wordpress-plain"></i></div>
                <div><i className="devicon-php-plain"></i></div>
                <div><i className="devicon-github-plain"></i></div>
                <div><i className="devicon-gulp-plain"></i></div>
            </div>   
            <div className="flex direction-row text-align">
                <div><i className="devicon-react-plain"></i></div>
                <div><i className="devicon-mongodb-plain"></i></div>
                <div><i className="devicon-nodejs-plain"></i></div>
            </div>
            <div className="flex direction-row text-align">
                <div><i className="devicon-express-original"></i></div>
                <div><i className="devicon-postgresql-plain"></i></div>
            </div>
            <div>
                <div><i className="devicon-meteor-plain"></i></div>
            </div>
            </div>
        </div>
    );
  }
}

export default Skills;