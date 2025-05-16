import AboutMeSection from '../components/AboutMeSection'
import EducationSection from '../components/EducationSection'
import HeroHeader from '../components/HeroHeader'
import ProjectList from '../components/ProjectList'

const Home = () => {
    return (
        <>
            <HeroHeader />
            <ProjectList />
            <EducationSection />
            <AboutMeSection />
        </>
    );
};

export default Home;