import React from 'react';

function Pricing() {
  return (
      <div className="container mx-auto py-10 px-4 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-3xl leading-none tracking-tight md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Pricing</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center">

          <div className="bg-purple-100 rounded-lg shadow-lg mx-6 my-4 lg:my-0 lg:w-1/3 lg:max-w-lg lg:h-auto">
            <div className="p-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Basic Plan</h2>
              <p className="text-gray-600 mb-4">Perfect for small businesses</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">$9.99</div>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full">Choose Plan</button>
            </div>
          </div>

          <div className="bg-teal-100 rounded-lg shadow-lg mx-6 my-4 lg:my-0 lg:w-1/3 lg:max-w-lg lg:h-auto">
            <div className="p-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Premium Plan</h2>
              <p className="text-gray-600 mb-4">Best value for mid-sized companies</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">$19.99</div>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full">Choose Plan</button>
            </div>
          </div>

          <div className="bg-green-100 rounded-lg shadow-lg mx-6 my-4 lg:my-0 lg:w-1/3 lg:max-w-lg lg:h-auto">
            <div className="p-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Plan</h2>
              <p className="text-gray-600 mb-4">Tailored for large organizations</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">$49.99</div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Pricing;
