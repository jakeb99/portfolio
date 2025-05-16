import maingif from '../../assets/gifs/undeadDefenseMain.gif';
import aigif from '../../assets/gifs/undead/ai-dest.gif';
import buildgif from '../../assets/gifs/undead/building.gif';

const UndeadDefenseProj = () => {
    return (
        <>
            <h1 className="text-5xl font-bold text-teal-200 pb-8">Undead Defense</h1>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <img src={maingif} alt={"img"} className="aspect-[16/9] object-cover" />
            </div>


            <h1 className="text-3xl font-bold text-teal-200 pb-2 pt-8">Introduction</h1>
                <p className="text-left font-regular text-white sm:text-xl/7">
                Undead defense is a 3d base defense game built in Unity for a game development bootcamp. The time line for this project was 2 months and was a solo project.
                I was inspired by the tower defense genre and plants vs. zombies. 
                </p>


            <h1 className="text-3xl font-bold text-teal-200 pb-2 pt-8">AI and Destructible Barriers</h1>
            <p className="text-left font-regular text-white sm:text-xl/7" >
                Barricades use a NavMesh modifier to vary the path cost. For example, a metal barricade will have a higher path cost than a wooden one. Barricades implement a Destroyable interface, when a barricade is destroyed A Nav Mesh Manager is called to re-bake the nav surface used by the AI. 
                <br /><br />
                I designed the AI following a state design pattern. An enemy can either be in a moving state, moving to the player; or in an attack state, destroying a barricade or attacking the player. Designing the system this way makes it easier to add new enemy AI behaviours as I add more content to the game.
            </p>
            <div className="bg-white w-[50%] dark:bg-gray-800 rounded-xl shadow-md overflow-hidden my-4">
                <img src={aigif} alt={"img"} className="aspect-[16/9] object-cover" />
            </div>
            <p className="text-left font-regular text-white sm:text-xl/7" >
                The result is an enemy AI that is intelligent. As we can see, the enemy capsule on the right decides to follow the easier path after breaking the initial barrier in front of it as two barricades are a higher path cost than one. 
            </p>


            <h1 className="text-3xl font-bold text-teal-200 pb-2 pt-8">Point Based Wave System</h1>
            <p className="text-left font-regular text-white sm:text-xl/7" >
                One Problem I faced was inconsistent wave difficulty. My original design increased the number of zombies spawned each wave but randomly selected the type of zombie. This made some waves have a lot of a hard enemy or a lot of a weaker enemy.
                <br /><br /> In order to fix this inconsistency I used a point based system where each enemy was assigned a cost (harder enemies had a higher cost) and the wave had a certain number of points to spend each wave on the make up of the enemies to spawn. As the player reached higher waves, the wave would have more points to spend.
                <br />  <br /> The outcome of this system is a consistent increase in difficulty as the player progresses to higher waves.
            </p>

            <h1 className="text-3xl font-bold text-teal-200 pb-2 pt-8">Placement and Interaction System</h1>
                <p className="text-left font-regular text-white sm:text-xl/7">
                The goal was to allow the player to purchase various items that they could place in the world and for them to be able to interact with those items once placed in the world through an interaction menu. 
                </p>
                <div className="bg-white w-[50%] dark:bg-gray-800 rounded-xl shadow-md overflow-hidden my-4">
                    <img src={buildgif} alt={"img"} className="aspect-[16/9] object-cover" />
                </div>
                <p className="text-left font-regular text-white sm:text-xl/7">
                When placing an object the system checks that we are in a valid placement area and that the object we want to place does not overlap any other game objects.
                <br /><br /> The interaction system was built with extension in mind. For an item to be intractable it must extend the IIntractable interface and provide the interaction options and functionality.
                </p>


            <h1 className="text-3xl font-bold text-teal-200 pb-2 pt-8">Save and Load System</h1>
                <p className="text-left font-regular text-white sm:text-xl/7">
                The objective was to create a save system that was able to be reused for different projects and different save methods. I achieved this by using an interface to use on scripts that needed to have persistent data. This interface implements SaveGameData and LoadGameData functions. This made the system reusable since it was not concerned with how each object was saved. 
                jbunThe system just needed to go through the game hierarchy looking for components that used the interface and called the load or save functionality on them. 
                <br /><br />Additionally, I abstracted the data handler so that different save methods could be implemented down the line without having to change the system. I implemented a FileDataHandler class that created save files on the machine and stored them in JSON. If later I wanted I could create a new handler to store the files encrypted or one that stores the data in the cloud - all without changing any code in the save system.

                <br /><br />One of the challenges I faced with my save system was saving complex objects to JSON. By default the json utility does not allow complex objects such as lists and dictionaries to be serialized. I was able to partially work around this by using the Newtonsoft.json package which allowed me to serialize structures such as dictionaries and lists but it still did not let me serialize game objects. In order to save game objects I had to create an intermediary object that was serializable to store the data from the game object I wanted to save/load.

                </p>
                <div className="flex justify-center mt-6">
                <a
                href="https://jape99.itch.io/undead-defense"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-teal-200 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-teal-400 transition"
                >
                    Play it on Itch.io
                </a>
                <a
                href="https://github.com/jakeb99/survive-game"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 mx-5 py-3 bg-teal-200 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-teal-400 transition"
                >
                    Check out the Code
                </a>
            </div>
        </>
        
    );
};

export default UndeadDefenseProj;