import ProjectCard from './ProjectCard';
import undeadDefenseGif from '../assets/gifs/undeadDefenseMain.gif';
import spaceCowboyGif from '../assets/gifs/spaceCowboy.gif';
import rbbGif from '../assets/gifs/rbb.gif';

const ProjectList = () => {

  return (
    <div className="px-[15%] py-12 bg-gray-900">
    <h1 className="text-5xl font-bold text-white pb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center mx-auto mx-w-6xl">
        <ProjectCard
          gifSrc={undeadDefenseGif}
          title="Undead Defense (Feb - April 2025)"
          subtitle="Unity"
          description="Top-down wave survival game made in Unity."
          link={"/portfolio/project/undead-defense"}
        />
        <ProjectCard
          gifSrc={spaceCowboyGif}
          title="Cosmic Cowboy (Sept 2024)"
          subtitle="Unity, Game Jam"
          description="A Sci-fi text based RPG where the player must deliver packages across the galaxy. Built in 2 days at Town One Game Jam at Black Bird Interactive."
          link={"/portfolio/project/cosmic-cowboy"}
        />
        <ProjectCard
          gifSrc={rbbGif}
          title="Robo Baby Ball (2023)"
          subtitle="Unreal Engine 5"
          description="A 3D puzzle platformer inspired by Super Monkey Ball built using Unreal Engine Blueprints. Created for a game design course at Western University"
          link={"/portfolio/project/robo-baby-ball"}
        />
      </div>
    </div>
  );
};

export default ProjectList;
