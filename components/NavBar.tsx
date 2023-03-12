import darkIcon from '../public/icons/go-dark-icon.svg'
import lightIcon from '../public/icons/go-light-icon.svg'
import Image from 'next/image'

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
      <Image
        className={darkMode ? 'modeIcon' : 'modeIcon hide'}
        onClick={handleLightMode}
        alt="mode"
        src={lightIcon}
      ></Image>
      <Image
        className={darkMode ? 'modeIcon hide' : 'modeIcon'}
        onClick={handleDarkMode}
        alt="mode"
        src={darkIcon}
      ></Image>
    </div>
  )
}

export default NavBar
