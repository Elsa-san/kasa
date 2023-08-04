import './header.scss'
import Logo from "../../assets/LOGO.png"

export default function Header() {
    return (
        <header className='header'>
        <img src={Logo} alt="logo de Kasa, location d'appartements" />
        </header>
    )
}

