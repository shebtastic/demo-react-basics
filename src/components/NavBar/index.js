import logo from "./logo.svg"
import "./NavBar.css"

function NavBar() {
    return (
        <nav>
            <img src={logo} alt="logo"/>
            <ul>
                <li>๐ฉโ๐ฉโ๐งโ๐ฆ</li>
                <li>๐ฌ</li>
                <li>๐</li>
            </ul>
            <span>searchbar</span>
            <span>profileLink</span>
        </nav>
    )
}

export default NavBar