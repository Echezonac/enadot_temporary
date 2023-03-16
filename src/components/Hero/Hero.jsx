import './Hero.css'

const Hero = () => {
  return (
		<div className="py-4 mb-5 hero-page" id="hero-page">
			<div className="col-12 hero-top-content">
				<h1 className="htitle text-1">&#8220;Uniquesness in Creativity</h1>
				<h1 className="htitle text-2">Futuristic Innovation</h1>
				<h1 className="htitle text-3">Sustainable Solutions&#8221;</h1>
			</div>
			<div className="col-12 hero-img-content"></div>
			<div className="col-12 hero-bottom-content">
				<div className="hero-bottom-content-text-box mt-4">
					<h1 className="htitle-2">
						I am Bede E. Hampo. A Fullstack Developer & Design Engineer{" "}
						<small>(architect), </small>
						available for business and collaboration, worldwide.
					</h1>
					<a
						href="tel:+2347065896334"
						className="text-maroon fs-6 fw-bold text-btn click-effect text-decoration-none"
					>
						Give me a call today &#8594;
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero