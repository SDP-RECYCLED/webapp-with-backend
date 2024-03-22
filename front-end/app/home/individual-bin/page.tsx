"use client"
import Charts from "@/components/Charts"
import Button from "@/components/Button"
import Link from 'next/link';
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
        <div className="container mx-auto py-10 px-4 max-w-8xl">
          <div className="mb-12">
            <h1 className="text-3xl leading-none tracking-tight md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Bin binID info</h1>
          </div>
              <div className="flex flex-row">
                  <div className="mr-5 mb-5">
                    <Link href="/">
                      <Button 
                        type="button" 
                        title="Edit name" 
                        variant='btn_green'
                      />
                    </Link>
                  </div>
                  <div className="mr-5 mb-5">
                    <Link href="/">
                      <Button 
                        type="button" 
                        title="Change configuration" 
                        variant='btn_green'
                      />
                    </Link>
                  </div>
                  
              </div>

            <div className="mb-12">
              <h1 className="text-3xl leading-none tracking-tight md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Stats</h1>
            </div>
            <Charts />

        </div>
      </div>
    );
}