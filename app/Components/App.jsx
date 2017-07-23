import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { provider } from 'react-redux';
import thunk from 'redux-thunk';
import Menu from './menu/index.jsx'
import { ajaxLoadData } from '../shared/utils/utils.js';

export default class App extends React.Component {
  static propTypes = {
    dataUrl: React.PropTypes.string
  };
   componentDidMount() {
        console.log(this.props.dataUrl);
        ajaxLoadData(this.props.dataUrl, (data) => {
            console.log("inside comp", data);
        });
    }

  render() {
    return (
     <div><Menu /></div>);
  }
}