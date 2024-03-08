"use client"
import Charts from "@/components/Charts"
import { BinData } from "@/Data/Bin/BinData"
import { useEffect, useState } from "react";
// import { fetchBins, UpdateStatus} from "@/connectivity/bin_api";

export default function Home() {
    // const [binData, setBinData] = useState<any>(null);
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const [error, setError] = useState<Error | null>(null);

    // useEffect(() => {
    //   fetchBins();
    // })

    // const fetchBins = async () => {
    //   try {
    //     const response = await fetch('http://172.21.4.224:5000/api/read_bin'); // Replace with your API endpoint
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const jsonData = await response.json();
    //     setBinData(jsonData);
    //   } catch {
    //     setError(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }

    return (
      <div className="m-10">
          <h2 className="mx-8 mb-6 mt-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Bin binID info</h2>
          <p>TODO: Edit name</p>
          <p>TODO: Change configuration</p>

          <h2 className="mx-8 mb-6 mt-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Stats</h2>
          <Charts />

      </div>
    );
}