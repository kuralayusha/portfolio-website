function NavBar() {
return (
    <div className="navBar">
        <h1>KuralaYusha</h1>
        <button>Dark Mode</button>

        <style jsx>{`
            .navBar {
                background-color: #000;
                color: #fff;
            }
        `}</style>
    </div>
)
}

export default NavBar