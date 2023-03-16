import './WorkItem.css'
import {Link} from 'react-router-dom'

const WorkItem = ({ title, img, decription, category, url }) => {
	return (
		<div className="work-item">
			<img src={img} alt={title} />
			<h5 className="htitle fs-6 mt-3 d-flex align-items-center justify-content-between">
				<span>{title}</span>{" "}
				<small className="ms-5 btn btn-dark py-1 px-2">{category}</small>
			</h5>
			<p className="my-3 ">{decription.substring(0, 100)}</p>
			<Link
				to={url}
				className="text-maroon text-btn fw-bold text-center text-decoration-none d-block "
				target="_blank"
			>
				{category === "tech" ? "visit" : "view"}
			</Link>
		</div>
	)
}

export default WorkItem 