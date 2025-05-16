import profilePic from '../assets/portfolioPic.jpeg'

const HeroHeader = () => {
    return (
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-[15%]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture in Double Circle */}
          <div className="relative w-60 h-60 aspect-square rounded-full border-4 border-teal-200 p-1">
            <img
              src={profilePic}
              alt="Jake-Bunting"
              className="rounded-full object-cover w-full h-full filter grayscale"
            />
          </div>
  
          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-regular text-gray-800 dark:text-white leading-snug">
                Game programmer specializing in systems and gameplay programming, focused on writing efficient, clean code and tackling new challenges in game development.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroHeader;