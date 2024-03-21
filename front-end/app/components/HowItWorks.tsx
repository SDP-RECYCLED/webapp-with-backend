import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-3xl leading-none tracking-tight md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          How It Works
        </h1>
      </div>

      {/* Cart Mechanism */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
          Cart Mechanism
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Each RecyclED bin contains a cart mechanism that disposes of the waste into the correct bin 
          once it has been identified by the object recognition model. 
          When a piece of rubbish is placed into the bin, the camera inside the cart takes a photo of the item,
          which is sent to the object recognition model. The model then determines the type of waste and instructs the cart to move to the correct bin.
          The mechanism uses a colour sensor to detect the colour of the bin and moves the cart to the correct bin based on the colour.
        </p>
        <img src="/cart_image.jpg" alt="Cart Mechanism" className="w-auto h-80" />
      </div>

      {/* Object Recognition Model */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
          Object Recognition Model
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The object recognition model is a machine learning model that can identify 
          and classify objects in an image. This model is used to identify the type 
          of waste and sort it into the correct bin.
        </p>
      </div>

      {/* Modular System */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
          Modular System
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The RecyclED system features a modular design that allows most regular bins to be easily placed into the cabinet.
          This allows for seamless integration of the RecyclED system into existing waste management infrastructure, as 
          existing bins can be retrofitted to work with the RecyclED system. The modular system also enables easy cleaning
          and maintenance, ensuring minimal downtime and maximum operational efficiency. 
        </p>
        <img src="/product_detail_bin_out.png" alt="Cabinet with bins pulled out" className="w-auto h-80" />
      </div>

      {/* Data Analysis */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
          Data Analysis
        </h2>
        <p className="mb-5 text-gray-700 leading-relaxed">
          The data analysis tool embedded within the RecyclED system offers invaluable
          insights into waste disposal patterns and behaviors. By collecting and analyzing
          data on the types of waste deposited into each bin, as well as the frequency
          and timing of disposal, the tool generates comprehensive reports and visualizations
          for users. These insights allow businesses and organizations to better understand
          their waste generation trends, identify areas for improvement, and optimize waste
          management strategies. From identifying the most common types of waste to pinpointing
          peak usage times for each bin, the data analysis tool empowers users to make informed
          decisions and drive continuous improvement in sustainability practices.
        </p>

      </div>

      {/* Waste Management */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
          Waste Management
        </h2>
        <p className="mb-5 text-gray-700 leading-relaxed">
          The RecyclED web application serves as a centralized hub for comprehensive waste management.
          Through the intuitive and user-friendly interface, users can effortlessly monitor and manage
          all their RecyclED bins from a single platform. The web app provides real-time updates and
          alerts, notifying users when bins are approaching full capacity or require maintenance.
          This proactive approach to waste management helps prevent overflow and downtime, ensuring
          uninterrupted operation and maximum efficiency. Additionally, the web app offers features
          for configuring bin settings, tracking usage statistics, and generating custom reports,
          empowering users to optimize waste management processes and achieve their sustainability
          goals with ease.
        </p>
      </div>

    
      
      
    </div>
  );
};

export default HowItWorks;
