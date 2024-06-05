import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const bgColor = isDarkTheme ? 'dark-con' : 'light-con'
      return (
        <div className="home-con">
          <Navbar />
          <div className={`con ${bgColor}`}>
            <img src={imgUrl} alt="about" className="home-logo" />
            <h1> About </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
