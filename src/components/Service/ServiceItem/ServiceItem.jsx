import { useState } from "react"
import "./ServiceItem.css"
import { motion } from "framer-motion"

const ServiceItem = ({ description,title,id,services,img, no }) => {
	const [show, setShow] = useState(false)
	const handleShow = (id) => {
		setShow(() => !show)
	}

	return (
		<div
			className={`col-xl-4 col-lg-4 col-md-6 mt-${
				id === 3 ? 6 : id === 2 ? 5 : 0
			}  col-sm-12 mx-auto service-${id} mb-4`}
		>
			<div className="service-card mx-auto rounded-1">
				<img src={img} alt="enadot_services" className="img-fluid" />
				<div className="service-card-text">
					<h5 className="fs-6 fw-bold htitle-2 pt-3 ps-3">{title}</h5>
					<p className="service-list px-3">{services}</p>
					<p
						className="text-maroon text-btn pb-3 fs-6 fw-bold ps-3 animate__animated animate__slow animate__infinite"
						onClick={handleShow}
					>
						{!show ? "Know more" : "See less"}
					</p>
					<div className="service-card-img bg-size ">
						{show && (
							<motion.div
								animate={{ opacity: show ? 1 : 0.1, y: 3, x: 0.5 }}
								initial={{ opacity: 0 }}
								transition={{ duration: 0.1 }}
								className="service-decription"
							>
								<p className="p-4">{description}</p>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceItem
