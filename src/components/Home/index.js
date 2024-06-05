import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const bgColor = isDarkTheme ? 'dark-con' : 'light-con'
      return (
        <div className="home-con">
          <Navbar />
          <div className={`con ${bgColor}`}>
            <img src={imgUrl} alt="home" className="home-logo" />
            <h1> Home </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
