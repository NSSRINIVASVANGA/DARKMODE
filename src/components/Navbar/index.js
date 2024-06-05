import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const themeChange = () => {
        toggleTheme()
      }

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBgColor = isDarkTheme ? 'dark' : 'light'

      const linkEl = isDarkTheme ? 'link-el-dark' : 'link-el-light'

      return (
        <div className={`nav-con ${navBgColor}`}>
          <div className="img-con">
            <Link to="/">
              <img src={logoUrl} alt="website logo" className="logo" />
            </Link>
          </div>
          <ul className="link-con">
            <Link to="/" className={linkEl}>
              {' '}
              <li> Home </li>{' '}
            </Link>
            <Link to="/about" className={linkEl}>
              {' '}
              <li> About </li>{' '}
            </Link>
          </ul>
          <div className="theme-con">
            <button
              type="button"
              className="theme-button"
              onClick={themeChange}
              data-testid="theme"
            >
              <img src={themeUrl} alt="theme" className="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
