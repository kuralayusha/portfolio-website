import darkIcon from '../public/icons/go-dark-icon.svg'
import lightIcon from '../public/icons/go-light-icon.svg'

type NavBarProps = {
  darkMode: boolean
  setDarkMode: any
}

function NavBar({ setDarkMode, darkMode }: NavBarProps) {
  function handleDarkMode() {
    setDarkMode((prev: boolean) => !prev)
  }

  return (
    <div className="navBar">
      <h1>kuralayusha</h1>
      <img
        className="modeIcon"
        onClick={handleDarkMode}
        alt="mode"
        src={darkMode ? lightIcon.src : darkIcon.src}
      ></img>
    </div>
  )
}

export default NavBar
