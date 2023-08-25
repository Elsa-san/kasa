import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./error.scss"
// Importing the Link component from React Router to manage links
import {Link} from 'react-router-dom'

export default function Error() {
	return (
		<div>
            <Header />
            <h1 className="error">404</h1>
            <p className="error-text">Oups! La page que vous recherchez n'existe pas</p>
            <Link className="error-back" to="/">Retourner sur la page d'accueil</Link>
            <Footer />
		</div>
	)
}