import React from 'react';
import Product from '@/public/product_last draft.png'
import Logo from '@/public/logozoomed.png'
import Image from 'next/image';

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
                        John Doe is our lead developer. With over 5 years of experience in web development, he&apos;s proficient in various programming languages and frameworks.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Julie Hong</span>
                    </h3>
                    <p className="text-gray-700">
                    As part of the software team, Julie plays a crucial role in designing using Figma and developing the website&apos;s frontend using Next.js. She also contributes to market research efforts.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Kunyu Wang</span>
                    </h3>
                    <p className="text-gray-700">
                    Kunyu is a valuable member of the hardware team, specialising in the development of cart and door mechanisms.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Lauren Cosgrove</span>
                    </h3>
                    <p className="text-gray-700">
                    Lauren is an integral part of the software team, focusing on frontend development using Next.js and carrying out market research.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Nik Peleshatyi</span>
                    </h3>
                    <p className="text-gray-700">
                    Nik is proficient in both software and hardware, playing a key role in integrating the model and hardware components such as the camera and colour sensor. </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Sara Khatun Guluzade</span>
                    </h3>
                    <p className="text-gray-700">
                    Sara is the lead developer of the AI object recognition model. With her expertise in AI, she ensures the accuracy and efficiency of our sorting system.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Siddharth Sakriya</span>
                    </h3>
                    <p className="text-gray-700">
                    Siddharth is a versatile member, contributing to both hardware and software development. He led the website&apos;s backend development using Flask and ensured seamless integration with the frontend.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                    <span className="font-bold">Yihan Wang</span>
                    </h3>
                    <p className="text-gray-700">
                    Yihan is a skilled member of the hardware team, contributing to the development of cart and door mechanisms.</p>
                </div>
            </div>
        </div>
        <div className="mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
            The Project
            </h2>
                <div>
                    <p className="text-gray-700">
                    Have you ever been in a position where you don’t know what bin to dispose of your waste in? RecyclED has been created to alleviate the ambiguities around waste disposal and to prevent individuals from putting items in the wrong bin. When non-recyclable items end up in recycling bins, the whole bin becomes contaminated - none of the waste can be recycled anymore.
                    </p>
                    <br></br>
                    <p className="text-gray-700">
                    With 84% of UK households unintentionally contaminating their recycling bins, and only 7.5% of all recyclable waste in offices ending up in recycling facilities (75% of all office waste is recyclable), this situation is imperative to control, especially when the practice is crucial to reducing the volume of waste sent to landfills, conserving natural resources and reduces the need to mine or source new raw materials. It is evident that this is a large issue, and if not mitigated swiftly, likely to contribute to climate change.
                    </p>
                    <br></br>
                    <p className="text-gray-700">
                    Our product, RecyclED, is a smart recycling device that classifies items placed into it and automatically places them in the correct bin with the use of pistons on the left and right to move items over the correct hatch to be disposed of. Bin owners are also provided with an application that notifies them when their bins are close to filling up so that the appropriate staff can be sent to empty the bins, thus minimising the likelihood of bins overflowing.
                    </p>
                    <br></br>
                    <p className="text-gray-700">
                    RecyclED is perfect for large corporations seeking to enhance their waste management and simplify the recycling process.
                    </p>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <div>
                        <h3 className="text-lg font-semibold text-green-1 mt-5">
                            <span className="font-bold">Model</span>
                        </h3>
                        <Image src={Product} alt="project1" width={400}/>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-green-1 mt-5">
                            <span className="font-bold">Logo</span>
                        </h3>
                        <Image src={Logo} alt="project1" height={300}/>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default About;
