// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {value: 0}

  findLengthOfChars = event => {
    this.setState({value: event.target.value.length})
  }

  render() {
    const {value} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputValue" className="text">
            Enter the phrase
          </label>
          <input
            type="text"
            className="search-input"
            placeholder="Enter the phrase"
            onChange={this.findLengthOfChars}
            id="inputValue"
          />
          <p className="result">No.of letters: {value}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
