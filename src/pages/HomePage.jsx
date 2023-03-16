import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Services from "../components/Service/Services"
import Works from "../components/Works/Works"
import Footer from "../components/Footer/Footer"

const HomePage = () => {
	return (
		<>
			<div className="bg-light col-12">
				<Header />
			</div>
			<Hero />
			<About />
			<Services />
			<Works />
			<Footer />
		</>
	)
}

export default HomePage
