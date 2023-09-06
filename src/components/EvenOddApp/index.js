import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    isWelcomeButton: true,
    isLightButton: true,
    isLoginApp: true,
    isCountButton: true,
    count: 0,
  }

  onClickWelcomeButton = () => {
    this.setState(prevState => ({
      isWelcomeButton: !prevState.isWelcomeButton,
    }))
  }

  onClickLightButton = () => {
    this.setState(prevState => ({isLightButton: !prevState.isLightButton}))
  }

  onClickLoginApp = () => {
    this.setState(prevState => ({isLoginApp: !prevState.isLoginApp}))
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickCountLetterButton = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {isWelcomeButton} = this.state
    const {isLightButton} = this.state
    const {isLoginApp} = this.state
    const {isCountButton} = this.state
    const {count} = this.state
    const getClickWelcomeButton = isWelcomeButton ? 'Subscribe' : 'Subscribed'
    const isColorSystem = isWelcomeButton ? 'Subscribe-1' : 'Subscribed-2'
    const modeClassName = isLightButton ? 'Dark-Mode' : 'Light-Mode'
    const textLightButton = isLightButton ? 'Dark Mode' : 'Light Mode'
    const textLightContent = isLightButton ? 'Light Mode' : 'Dark Mode'
    const onLoginButton = isLoginApp ? 'Welcome User' : 'Please Login'
    const isLoginText = isLoginApp ? 'Logout' : 'Login'
    const isEvenNumber = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="Count-Number-heading">Count Number</h1>
          <p className="count-letter">{count}</p>
          <p className="count-description">
            Count <span className="even-number">{isEvenNumber}</span>
          </p>
          <button
            type="button"
            className="subscribe-Button"
            onClick={this.onClickCountLetterButton}
          >
            Increment
          </button>
          <p className="welcome-paragraph">
            *Increment By Random Number from 0 to 100
          </p>
        </div>
        <div className="second-container">
          <h1 className="Login-heading">Login App</h1>
          <p className="welcome-description">{onLoginButton}</p>
          <button
            type="button"
            className="subscribe-Button"
            onClick={this.onClickLoginApp}
          >
            {isLoginText}
          </button>
        </div>
        <div className="third-container">
          <div className={`container ${modeClassName}`}>
            <h1 className="Light-Dark-heading">{textLightContent}</h1>
            <button
              type="button"
              className="subscribe-Button"
              onClick={this.onClickLightButton}
            >
              {textLightButton}
            </button>
          </div>
        </div>
        <div className={`fourth-container ${isColorSystem}`}>
          <h1 className="welcome-heading">Welcome App</h1>
          <p className="welcome-paragraph">Thank you! Happy Learning</p>
          <button
            type="button"
            className="subscribe-Button"
            onClick={this.onClickWelcomeButton}
          >
            {getClickWelcomeButton}
          </button>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
