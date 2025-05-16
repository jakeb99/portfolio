import { Link } from "react-router-dom";

const ProjectCard = ({gifSrc, title, description, subtitle, link}) => {
    return (
        <Link className="block w full" to={link}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <img src={gifSrc} alt={title} className="aspect-[16/9] object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                    <h4 className="text-md text-teal-200">{subtitle}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;