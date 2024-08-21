import React, { Component } from 'react'
import spinner from './spinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center position-absolute top-50 start-50'>
        <img src={spinner} alt={spinner}></img>
      </div>
    )
  }
}
