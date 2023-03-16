import "./Works.css"
import {
	// BsArrowRight,
	BsFillCaretRightFill,
	BsFillCaretLeftFill,
} from "react-icons/bs"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Projects from "../../utils/Projects"
import WorkItem from "./WorkItem/WorkItem"

const Works = () => {
	// const [projects, setProject] = useState(Projects)
	// const filterProjects = []

	// const handleFilter = (cat) => {
	// 	if (cat === "archi") {
	// 		filterProjects.push(projects.filter((item) => item.category === "archi"))
	// 		console.log(filterProjects)
	// 	} else if (cat === "tech") {
	// 		filterProjects.push(projects.filter((item) => item.category === "tech"))
	// 		console.log(filterProjects)
	// 	} else {
	// 		filterProjects.push(
	// 			projects
	// 		)
	// 		console.log(filterProjects)
	// 	}
	// }

	const [width, setWidth] = useState(0)
	const carousel = useRef()
	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
	}, [])

	return (
		<div className="row bg-light work-page py-5 px-5" id="works">
			<div className="col-12">
				<h5 className="htitle fs-2 ps-5 text-center py-1">My Works</h5>
				{/* <div className="d-flex justify-content-end align-items-center">
					<h6 className="n-font text-end pe-5" onClick={() => handleFilter()}>
						All works <BsArrowRight />
					</h6>
					<h6 className="n-font text-end pe-5" onClick={() => handleFilter('tech')}>
						Tech
						<BsArrowRight />
					</h6>
					<h6 className="n-font text-end pe-5" onClick={() => handleFilter('archi')}>
						Archi
						<BsArrowRight />
					</h6>
				</div> */}
			</div>

			{/* work item start*/}
			<div className="col-xl-10 col-lg-11 col-md-11 col-sm-12 mt-3 mx-auto carousel-container position-relative">
				<BsFillCaretLeftFill className="position-absolute top-50 start-0 translate-middle fs-2 text-maroon" />
				<motion.div
					className="carousel"
					ref={carousel}
					whileTap={{ cursor: "grabbing" }}
				>
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="work-inner-slide"
					>
						{Projects.map((project, index) => {
							return (
								<motion.div className="item" key={index}>
									<WorkItem {...project} />
								</motion.div>
							)
						})}
					</motion.div>
				</motion.div>
				<BsFillCaretRightFill className="position-absolute top-50 start-100 translate-middle fs-2 text-maroon" />
			</div>
			{/* work item end */}
		</div>
	)
}

export default Works
