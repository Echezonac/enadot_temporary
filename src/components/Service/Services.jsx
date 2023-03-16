import "./Services.css"
import ServiceItem from "./ServiceItem/ServiceItem"
import img1 from '../../assets/images/software-bg.jpg'
import img2 from "../../assets/images/archi-bg.jpg"
import img3 from "../../assets/images/consult-bg.jpg"

const Services = () => {
	const ServiceList = [
		{
			id: 1,
			title: "Software Developer",
			img: img1,
			description:
				"I provide efficient and effective software solutions to meet the needs of my clients. I offer a range of services, including consultation, software design, development, testing, deployment, and maintenance and support. My expertise in various programming languages, frameworks, and libraries enables me to provide high-quality code that meets your specifications. I prioritize quality, reliability, scalability, and security in all my software development projects. With my services, you can expect a reliable and efficient software solution that meets your needs. Contact me today to discuss your software development needs.",
			services: "Web & Mobile Application Design and Development",
		},
		{
			id: 2,
			title: "Design Engineer",
			img: img2,
			description:
				"I provide comprehensive and innovative design solutions that meet the needs of my clients. I offer a range of services, including consultation, conceptual design, design development, construction documents, and construction administration. I have expertise in a variety of architectural styles and building types, including residential, commercial, institutional, and industrial. I prioritize functionality, sustainability, and aesthetics in all my designs. With my services, you can expect a well-designed and efficient space that meets your needs and exceeds your expectations. Contact me today to discuss your architectural needs.",
			services: "Architectural Plan & Modeling",
		},
		{
			id: 3,
			title: "Consultant",
			img: img3,
			description:
				"I provide expert guidance and support to ensure that your construction project is a success. I offer a range of services, including project management, construction planning, cost estimating, scheduling, quality control, and risk management. I have extensive experience with a variety of construction projects, including residential, commercial, and industrial buildings. I prioritize clear communication, attention to detail, and adherence to budgets and timelines in all my projects. With my services, you can expect a smooth and successful construction process that meets your needs and exceeds your expectations. Contact me today to discuss your construction consulting needs.",
			services:
				"Building Constuction | Interior Designing | Workforce Procurement",
		},
	]

	return (
		<div className="row mt-5 p-5" id="services">
			<div className="col-12">
				<h2 className="htitle fs-1 text-center pb-5">Services</h2>
			</div>
			{ServiceList.map((service, index) => (
				<ServiceItem {...service} key={index} no={index} />
			))}
		</div>
	)
}

export default Services
