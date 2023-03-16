import "./Footer.css"
import { BsGithub, BsLinkedin, BsInstagram, BsTelephone } from "react-icons/bs"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<div className="row footer bg-light mt-3 py-3">
			<div className="col-12">
				<div className="icons d-flex align-items-center justify-content-center py-3">
					<a
						href="tel:+2347065896334"
						className="text-dark text-decoration-none mx-3"
					>
						<BsTelephone />
					</a>
					<Link
						to="https://github.com/Echezonac"
						className="text-dark text-decoration-none d-block mx-3"
						target="_blank"
					>
						<BsGithub />
					</Link>
					<Link
						to="https://www.linkedin.com/in/hampoechebede"
						className="text-dark text-decoration-none d-block mx-3"
						target="_blank"
					>
						<BsLinkedin />
					</Link>
					<Link
						to="https://www.instagram.com/enadot_ng/"
						className="text-dark text-decoration-none d-block mx-3"
						target="_blank"
					>
						<BsInstagram />
					</Link>
				</div>
				<p className="text-center">
					Copyright © 2023{" "}
					<span className="text-maroon fw-bold">enadot solutions</span>. All
					rights reserved.
				</p>
			</div>
		</div>
	)
}

export default Footer
