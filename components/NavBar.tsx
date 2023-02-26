

type NavBarProps = {
    darkMode: boolean
    setDarkMode: any
}

function NavBar( { setDarkMode, darkMode }: NavBarProps) {

    function handleDarkMode() {
        setDarkMode((prev: boolean) => !prev)
    }

return (
    <div className="navBar">
        <h1>Kurleygram</h1>
        <button onClick={handleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </div>
)
}

export default NavBar