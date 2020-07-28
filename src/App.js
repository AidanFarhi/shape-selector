import React, {Component} from 'react'
import Shape from './Shape.js'

class Selector extends Component {
  constructor(){
    super()
    this.state = {
      selectedShape: 'square',
      count: 0
    }

  }

  selectShape = shapeName => {
    this.setState({
      selectedShape: shapeName
    })
  }

  shapeCount = () => {
    this.setState({
      count: this.state.count + 1
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
          <div>{this.state.count}</div>
        </div>
      </div>
    )
  }
}

export default Selector
