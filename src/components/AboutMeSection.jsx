const AboutMeSection = () => {
    return (
        <div className="px-[15%] py-12 bg-teal-200">
            <h1 className="text-3xl font-bold text-gray-900 pb-8">Hi, I'm Jake</h1>
            <blockquote className="text-left text-xl/8 font-regular text-gray-900 px-8 sm:text-2xl/9">
                <p>
                I am a 26 year old developer that's currently looking to break into the gaming industry. Previously, I worked as a web developer for 2 years, specializing in React web app development.
                <br /><br />I describe myself as a problem solver that seeks opportunities to learn new things, at the same time, constantly improving my skills. I enjoy creating games that feel great to play, with clean code that is maintainable and reusable when possible. I thrive on difficult challenges and learning new things.
                <br /><br />Want to know more? You can find my contact information in my resume. You can also reach me on any of my social media.
                </p>
            </blockquote>
            <div className="flex justify-center mt-6">
            <a
            href="/resume.pdf"  // Update path if needed
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 transition"
            >
                View Resume
            </a>
            </div>
        </div>
    );
};

export default AboutMeSection;