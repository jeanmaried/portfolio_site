import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import ProjectSlides from './ProjectSlides';
import './projects.css';
import '../../flex.css';

import axios from 'axios';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';



export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project_info: [],
      current: undefined,
      ready: false
    }

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.dotClick = this.dotClick.bind(this);
    this.preloadNextImage = this.preloadNextImage.bind(this);
  }

  componentWillMount() {
    axios.get('project-config.json')
    .then((res) => {
      this.setImageArray(res.data);
    });
  }

  setImageArray(infoArray) {
    let newArray = [];
    for(let i = 0; i < infoArray.length; i++) {
      newArray.push(infoArray[i]);
    }
    this.setState({ project_info: newArray, current: 0, ready: true });
  }

  preloadNextImage() {
    let current = this.state.current;
    let project_info = this.state.project_info;

    if( (current != undefined) && (current < project_info.length - 1) )
      return (
        <div style={{display: 'none', height:'100%', backgroundImage: `url(${(this.state.project_info[this.state.current + 1])}.jpg)`}}></div>
      )
    else
      return null
  }

  render() {
    
        return (
          <div className="slider flex direction-column align-items-center">
            {/* The Current Image*/}
            <div className="flex align-items-center">
            <LeftArrow previousSlide={this.previousSlide} />
            {
              this.state.ready ?
              <ProjectSlides
                project_info={this.state.project_info}
                current={this.state.current}
                ready={this.state.ready}
              />
              : null
            }
            <RightArrow nextSlide={this.nextSlide} />
            </div>
    
            {/* Arrows */}
            {/* Dots */}
            <Dots
              numberOfDots={this.state.project_info.length}
              isCurrent={this.state.current}
              dotClick={this.dotClick}
             />
    
             {this.preloadNextImage()}
          </div>
        );
      }
    
      /* Handle cLicking of dots */
      dotClick(dotIndex) {
        this.setState({ current: dotIndex })
      }
    
      /* Previous & Next Slide Functionality */
      previousSlide() {
        let current = this.state.current;
        let infoArray = this.state.project_info.length - 1;
    
        if(current >= 1)
          this.setState({ current: current - 1 })
        if(current === 0)
          this.setState({ current: infoArray })
      }
    
      nextSlide() {
        let current = this.state.current;
        let imageArray = this.state.project_info.length - 1;
    
        if((current >= 0) && (current !== imageArray))
          this.setState({ current: current + 1 })
        if(current === imageArray) {
          this.setState({ current: 0 })
        }
      }
    
    }






