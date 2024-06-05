import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? 'dark-con' : 'light-con'

      return (
        <div className="home-con">
          <Navbar />
          <div className={`con ${bgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-logo"
            />
            <h1> Lost Your Way? </h1>
            <p> We cannot seem to find the page you are looking for. </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
