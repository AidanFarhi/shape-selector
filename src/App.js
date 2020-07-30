import React, {Component} from 'react'
import Shape from './Shape.js'

class Selector extends Component {
  constructor(){
    super()
    this.state = {
      selectedShape: 'square',
      circle: 0,
      square: 0,
      triangle: 0,
      trapezium: 0,
      star: 0,
      oval: 0,
    }
  }

  selectShape = shape => {
    this.setState({
      [shape]: this.state[shape] + 1
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='navbar'>
          <div>Selected:
            <div>{this.state.selectedShape}</div>
          </div>
          <Shape id='top-shape' shape={this.state.selectedShape}/>
        </div>
        <div className='shape-list'>
          <Shape shape='square'selectShape={this.selectShape}/>
          <Shape shape='circle'selectShape={this.selectShape}/>
          <Shape shape='triangle'selectShape={this.selectShape}/>
          <Shape shape='trapezium'selectShape={this.selectShape}/>
          <Shape shape='star'selectShape={this.selectShape}/>
          <Shape shape='oval'selectShape={this.selectShape}/>
        </div>
        <div className='footer'>
          Triangle Clicks:
          <div>{this.state.triangle}</div>
          Square Clicks:
          <div>{this.state.square}</div>
          Star Clicks:
          <div>{this.state.star}</div>
          Trapezium Clicks:
          <div>{this.state.trapezium}</div>
          Oval Clicks:
          <div>{this.state.oval}</div>
          Circle Clicks:
          <div>{this.state.circle}</div>
        </div>
      </div>
    )
  }
}

export default Selector
