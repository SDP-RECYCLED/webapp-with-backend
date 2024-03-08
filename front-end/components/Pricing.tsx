import React from 'react';

function Pricing() {
  return (
    <div className="h-full p-16">
      <div className="flex flex-col lg:flex-row justify-center">
        {/* Pricing Card 1 */}
        <div className="bg-white rounded-lg shadow-lg mx-6 my-4 lg:my-0 lg:w-1/3 lg:max-w-lg lg:h-96 pt-16">
          <div className="p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Basic Plan</h2>
            <p className="text-gray-600 mb-4">Perfect for small businesses</p>
            <div className="text-4xl font-bold text-gray-800 mb-4">$9.99</div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Choose Plan</button>
          </div>
        </div>

        {/* Pricing Card 2 */}
        <div className="bg-white rounded-lg shadow-lg mx-6 my-4 lg:my-0 lg:w-1/3 lg:max-w-lg lg:h-96 pt-16">
          <div className="p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Premium Plan</h2>
            <p className="text-gray-600 mb-4">Best value for professionals</p>
            <div className="text-4xl font-bold text-gray-800 mb-4">$19.99</div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Choose Plan</button>
          </div>
        </div>

        {/* Pricing Card 3 */}
        <div className="bg-white rounded-lg shadow-lg mx-6 my-4 lg:my-0 lg:w-1/3 lg:max-w-lg lg:h-96 pt-16">
          <div className="p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Plan</h2>
            <p className="text-gray-600 mb-4">Tailored for large organizations</p>
            <div className="text-4xl font-bold text-gray-800 mb-4">$49.99</div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
