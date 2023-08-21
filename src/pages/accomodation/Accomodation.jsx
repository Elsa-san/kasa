import './accomodation.scss'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Collapse from "../../components/collapse/Collapse"
import datas from "../../datas/datas"
import { useParams } from "react-router-dom"
import ActiveStar from "../../assets/star-active.png"
import InactiveStar from "../../assets/star-inactive.png"


export default function Accomodation() {

const idAccomodation = useParams('id').id;
const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation)
const rating = dataCurrentAccomodation[0].rating
	
	return (
		<div>
        <Header />
		<main className="accomodation">
			<h1>{dataCurrentAccomodation[0].title}</h1>
			<p>{dataCurrentAccomodation[0].location}</p>
			<div>
			{dataCurrentAccomodation[0].tags.map((tag, index) => {
			return (
				<button className="tag" key={index}>{tag}</button>
				)
			})}
			</div>
			<div className="stars"> {Array.from({ length: 5 }).map((_, index) => (
             <img
             key={index}
             src={index < rating ? ActiveStar : InactiveStar}
             alt="star"/>
             ))}
             </div>
                        
		<div className="container-collapse">
			<Collapse className="accomodation-collapse" title={"Description"} content={datas.description}/>
			<Collapse title={"Equipements"} content={datas.equipments}/>

		</div>
		</main>
        <Footer />
		</div>
	)
}