// pages/index.jsx

import BinTable from "@/components/BinTable"
import Charts from "@/components/Charts"

export default function Home() {
  const binsData = [
    { id: 1, name: 'Bin 1', status: 'Available' },
    { id: 2, name: 'Bin 2', status: 'Full' },
    { id: 3, name: 'Bin 3', status: 'Available' },
    { id: 4, name: 'Bin 4', status: 'Available'},
    { id: 5, name: 'Bin 5', status: 'Maintenance Needed' }
  ];

  return (
      <div className="container mx-auto py-10 px-4 max-w-8xl">
        <div className="m-10">
          <h1 className="mx-8 mb-6 mt-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Overview</h1>
          <Charts />
          <br></br>
          <h1 className="mx-8 mb-4 mt-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">All Bins</h1>
          <BinTable bins={binsData} />  
        </div>
      </div>
  );
}
