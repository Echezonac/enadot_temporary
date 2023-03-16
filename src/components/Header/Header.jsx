import AnchorLink from "react-anchor-link-smooth-scroll";
import { MenuButtonWideFill } from "react-bootstrap-icons";
import brand from '../../assets/images/logo.png';
import "./Header.css";
// import { useState } from 'react';

const Header = () => {
	// const [hideMenu, setHideMenu] = useState(true)
	// const handleToggle = () =>{
	//     setHideMenu(()=>!hideMenu)
	// }

	return (
		<nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary px-3 py-3">
			<div className="container-fluid">
				<AnchorLink href="#hero-page" className="navbar-brand text-danger">
					<img src={brand} alt="enadot_logo" width={100} />
				</AnchorLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<MenuButtonWideFill />
					{/* <span className="navbar-toggler-icon"></span> */}
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
						<li
							className="nav-item active mx-2"
							data-bs-toggle="collapse"
							data-bs-target="#navbarTogglerDemo02"
						>
							<AnchorLink
								href="#about"
								className="nav-link active"
								aria-current="page"
							>
								About
							</AnchorLink>
						</li>
						<li
							className="nav-item active mx-2"
							data-bs-toggle="collapse"
							data-bs-target="#navbarTogglerDemo02"
						>
							<AnchorLink
								href="#services"
								className="nav-link "
								aria-current="page"
							>
								Services
							</AnchorLink>
						</li>
						<li
							className="nav-item active mx-2"
							data-bs-toggle="collapse"
							data-bs-target="#navbarTogglerDemo02"
						>
							<AnchorLink
								href="#works"
								className="nav-link "
								aria-current="page"
							>
								Works
							</AnchorLink>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<a
							href="tel:+2347065896334"
							className="nav-item btn btn-outline-dark mx-2"
						>
							Let's talk
						</a>
					</form>
				</div>
			</div>
		</nav>
	)
}

export default Header
