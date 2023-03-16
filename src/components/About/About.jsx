import "./About.css"
import img from "../../assets/images/about-bg2.jpg"
import Modal from "../Modal/Modal"

const About = () => {
	return (
		<div className="row bg-light about-page mt-5 pt-5" id="about">
			{/* about img start */}
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 about-content about-img p-5">
				<img src={img} alt="enadot" className="img-fluid" />
			</div>
			{/* about img end */}

			{/* about text start */}
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 about-content p-5 d-flex align-items-center">
				<div>
					<h3 className="htitle fs-1">About me</h3>
					<p className="about-description">
						Being a full-stack engineer, I have worked with front-end and
						back-end technologies. Programming languages are a strong suit of
						mine, and I have a solid understanding of web development concepts.
						Every project would benefit from my abilities to work with
						cross-functional teams and tackle challenging issues. I'm constantly
						looking for ways to advance your knowledge and skills thanks to my
						passion for learning and for remaining current with cutting-edge
						technologies.
					</p>
					{/* <p>
						The goal of enaDot Solutions is to create and offer cutting-edge
						technology-based goods and services. We work in the technology
						sector and place a lot of emphasis on developing innovative,
						game-changing solutions to issues that can arise across different
						industries.
					</p> */}
					<button
						type="button"
						className="btn bg-none border-0 text-btn fs-6 fw-bold text-maroon px-0"
						data-bs-toggle="modal"
						data-bs-target="#exampleModal"
					>
						View Resume &#8594;
					</button>
					<Modal />
				</div>
			</div>
			{/* about text end */}
		</div>
	)
}

export default About
