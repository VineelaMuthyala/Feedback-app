import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {emojiStatus: true}

  emojiStatusChange = () => {
    this.setState({emojiStatus: false})
  }

  thankyouResponse = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="second-container">
        <img src={loveEmojiUrl} alt=" love emoji" className="emoji" />
        <h1 className="heading">Thank You</h1>
        <p className="text">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  emojiFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="second-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <div className="emojis-container">
          <ul className="unordered-list">
            {emojis.map(eachItem => (
              <li key={eachItem.id}>
                <div className="emoji-container">
                  <img
                    className="emoji"
                    alt={eachItem.name}
                    src={eachItem.imageUrl}
                    onClick={this.emojiStatusChange}
                  />
                  <p className="name">{eachItem.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {emojiStatus} = this.state

    return (
      <div className="first-container">
        {emojiStatus ? this.emojiFeedback() : this.thankyouResponse()}
      </div>
    )
  }
}

export default Feedback
