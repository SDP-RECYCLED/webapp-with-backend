import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
        <div className="mb-12">
            <h1 className="text-3xl leading-none tracking-tight md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            About Us
            </h1>
        </div>
        <div className="mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
            The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Christopher Dalziel</span>
                    </h3>
                    <p className="text-gray-700">
                    John Doe is our lead developer. With over 5 years of experience in web development, he's proficient in various programming languages and frameworks.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Julie Hong</span>
                    </h3>
                    <p className="text-gray-700">
                    Jane Smith is our creative designer. She has a keen eye for detail and is passionate about creating engaging user experiences.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Kunyu Wang</span>
                    </h3>
                    <p className="text-gray-700">
                    Michael Johnson is our marketing specialist. He excels in market analysis and developing effective strategies to reach our target audience.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Lauren Cosgrove</span>
                    </h3>
                    <p className="text-gray-700">
                    Michael Johnson is our marketing specialist. He excels in market analysis and developing effective strategies to reach our target audience.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Nik Peleshatyi</span>
                    </h3>
                    <p className="text-gray-700">
                    Michael Johnson is our marketing specialist. He excels in market analysis and developing effective strategies to reach our target audience.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Sara Khatun Guluzade</span>
                    </h3>
                    <p className="text-gray-700">
                    Michael Johnson is our marketing specialist. He excels in market analysis and developing effective strategies to reach our target audience.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Siddharth Sakriya</span>
                    </h3>
                    <p className="text-gray-700">
                    Michael Johnson is our marketing specialist. He excels in market analysis and developing effective strategies to reach our target audience.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Yihan Wang</span>
                    </h3>
                    <p className="text-gray-700">
                    Michael Johnson is our marketing specialist. He excels in market analysis and developing effective strategies to reach our target audience.
                    </p>
                </div>
            </div>
        </div>
        <div className="mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
            The Project
            </h2>
                <div>
                    <p className="text-gray-700">
                    We decided to create RecyclED to address the problem of recycling contamination.
                    </p>
                </div>
        </div>
    </div>
  );
};

export default About;
