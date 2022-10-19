import logo from "./logo.svg"
import "./NavBar.css"

function NavBar() {
    return (
        <nav>
            <img src={logo} alt="logo"/>
            <ul>
                <li>👩‍👩‍👧‍👦</li>
                <li>💬</li>
                <li>🌍</li>
            </ul>
            <span>searchbar</span>
            <span>profileLink</span>
        </nav>
    )
}

export default NavBar