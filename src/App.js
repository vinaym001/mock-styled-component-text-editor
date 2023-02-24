import {Component} from 'react'
import './App.css'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {TextArea} from './styledComponents'

class App extends Component {
  state = {
    isBoldClicked: false,
    isItallicClicked: false,
    isUnderLineClicked: false,
  }

  onBold = () => {
    this.setState(prevState => ({
      isBoldClicked: !prevState.isBoldClicked,
    }))
  }

  onItalic = () => {
    this.setState(prevState => ({
      isItallicClicked: !prevState.isItallicClicked,
    }))
  }

  onUnderLine = () => {
    this.setState(prevState => ({
      isUnderLineClicked: !prevState.isUnderLineClicked,
    }))
  }

  render() {
    const {isBoldClicked, isItallicClicked, isUnderLineClicked} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <div>
          <button type="button" onClick={this.onBold}>
            <VscBold />
          </button>
          <button type="button" onClick={this.onItalic}>
            <GoItalic />
          </button>
          <button type="button" onClick={this.onUnderLine}>
            <AiOutlineUnderline />
          </button>
        </div>
        <TextArea rows={30} cols={30} fontWeight={isBoldClicked && "bold"} textDeco={isItallicClicked && "italic"} fontStyle={isUnderLineClicked && "underline"}/>
      </div>
    )
  }
}

export default App
