import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import bannerImage from '../../assets/banner_img.png'
import './home.scss'

export default function Home() {
	return (
		<div>
            <Header />
            <main className="main">
            <Banner imageUrl={bannerImage} showText={true} />
            <Gallery />
            </main>
            <Footer/>
		</div>
	)
}