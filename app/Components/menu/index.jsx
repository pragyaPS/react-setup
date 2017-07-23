import React from 'react';
import PropTypes from 'prop-types';
import  './menu.scss';
import { ajaxLoadData } from '../../shared/utils/utils.js';

export default class Menu extends React.Component {
    static propTypes = {
    dataUrl: React.PropTypes.string
  };
 
  constructor() {
      super();
     this.state = { employeeList: [] }
  }
 
    render(){
        return ( <div className= "menu">
        </div>)
    }

    
}