'use client'
import AreaChartPlot from "./AreaChartPlot";
import PieChartPlot from "./PieChartPlot";
import RadarChartPlot from "./RadarChartPlot";
import React, { useEffect, useState } from 'react';

interface RecycledData {
    proportion: number;
    recycled: number;
    total: number;
  }

const Charts = () => {

    const [data, setData] = useState<RecycledData[]>([]);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5000/api/recycled_items');
            // Assume the response is an array of RecycledData objects
            const json: RecycledData[] = await response.json();
            setData(json); // Update the state with the fetched data
            console.log("Fetched data:", json);
          } catch (error) {
            console.error("Failed to fetch data:", error);
          }
        };
        fetchData();
      }, []);

    
    if (data.length === 0) {
        return <p>Loading...</p>;
      }
    const proportionValue = data[0].proportion;
    const recycledValue = data[0].recycled;
    const totalValue = data[0].total;
    console.log("data:", data[0]);
    
  return (
    <>
        <section>
            <div className="flex m-4 gap-2">
                <div className="flex-1 px-2 justify-center w-16 bg-white rounded h-300px ">
                    <div className="">
                        <p className="text-transparent bg-clip-text bg-gradient-to-t from-teal-1 to-green-400 py-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl inline-block">{recycledValue}</p>
                        <p className="text-black font-bold">items recycled (all time)</p>
                    </div>
                </div>
                <div className="flex-1 px-2 justify-center w-16 bg-white rounded max-h-300px">
                    <div className="">
                        <p className="text-transparent bg-clip-text bg-gradient-to-t from-teal-1 to-green-400 py-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl inline-block">{Math.round(proportionValue * 100)}%</p>
                        <p className="text-black font-bold">of all waste recycled</p>
                    </div>
                </div>
                <div className="flex-1 px-2 justify-center w-16 bg-white rounded max-h-300px">
                    <div className="">
                    <p className="text-transparent bg-clip-text bg-gradient-to-t from-teal-1 to-green-400 py-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl inline-block">{totalValue}</p>
                    <p className="text-black font-bold">items recycled this week</p>
                    </div>
                </div>
                <div className="flex-1 px-2 justify-center w-16 bg-white rounded h-300px">
                    <div className="">
                        <p className="text-transparent bg-clip-text bg-gradient-to-t from-teal-1 to-green-400 py-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl inline-block">1pm</p>
                        <p className="text-black font-bold">most active time of day</p>
                    </div>
                </div>
            </div>
        </section>
        <br></br>

        <section className="flex my-4 px-4 gap-2">
            <div className=" w-1/3 h-[250px] bg-white rounded"><PieChartPlot/></div>
            <div className="w-1/3 h-[250px] bg-white rounded"><AreaChartPlot/></div>
            <div className=" w-1/3 h-[300px]  bg-white rounded"><RadarChartPlot/></div>
        </section>
    </>
  );
};

export default Charts;