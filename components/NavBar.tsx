import darkIcon from '../public/icons/go-dark-icon.svg'
import lightIcon from '../public/icons/go-light-icon.svg'

type NavBarProps = {
  darkMode: any
  setDarkMode: any
}

function NavBar({ setDarkMode, darkMode }: NavBarProps) {
  function handleDarkMode() {
    localStorage.setItem('theme', 'true')
    setDarkMode(true)
  }
  function handleLightMode() {
    localStorage.setItem('theme', 'false')
    setDarkMode(false)
  }

  // console.log(darkMode)

  return (
    <div className="navBar">
      <h1>kuralayusha</h1>
      <img
        className={darkMode ? 'modeIcon' : 'modeIcon hide'}
        onClick={handleLightMode}
        alt="mode"
        src={lightIcon.src}
      ></img>
      <img
        className={darkMode ? 'modeIcon hide' : 'modeIcon'}
        onClick={handleDarkMode}
        alt="mode"
        src={darkIcon.src}
      ></img>
    </div>
  )
}

export default NavBar
