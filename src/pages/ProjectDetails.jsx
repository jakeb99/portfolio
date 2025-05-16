import { Link, useParams } from "react-router-dom";
import UndeadDefenseProj from "../components/projectComponents/UndeadDefenseProj";

const ProjectDetails = () => {
    const {id} = useParams();

    const renderProject = () => {
        switch (id) {
            case 'undead-defense':
                return <UndeadDefenseProj />
            default: 
                return (
                    <h1 className="text-3xl font-bold text-teal-200 pb-2 pt-8">Page Coming Soon!</h1>
                );
        }
    };

    return (
    <div className="px-[15%] py-12 bg-gray-900">
        <Link to={"/"}>
            <p className="text-xl font-bold text-teal-200 pb-1 hover:text-teal-400">back</p>
        </Link>
        {renderProject()}
    </div>
    );
};

export default ProjectDetails;