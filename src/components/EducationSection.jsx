const EducationSection = () => {
    return (
    
    <div className="px-[15%] py-12 bg-gray-900">
        <h1 className="text-5xl font-bold text-white pb-8">Education</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center mx-auto mx-w-6xl">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ">
                <div className="p-4">
                    <h3 className="text-lg font-bold text-teal-200 ">BSc. Specialization in Computer Science (2019 - 2023)</h3>
                    <h4 className="text-md text-white">Western University</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">3.7 GPA</p>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ">
                <div className="p-4">
                    <h3 className="text-lg font-bold text-teal-200 ">Unity Game Development Bootcamp (Sept 2024 - April 2025)</h3>
                    <h4 className="text-md text-white">Circuit Stream</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">30 Week project based game development bootcamp focused on Unity development.</p>
                </div>
            </div>
        </div>
    </div>
        
    );
};

export default EducationSection;