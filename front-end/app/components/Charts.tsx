'use client'
import AreaChartPlot from "./AreaChartPlot";
import BarChartPlot from "./BarChartPlot";
import PieChartPlot from "./PieChartPlot";
import LineChartPlot from "./LineChartPlot";
import RadarChartPlot from "./RadarChartPlot";

const Charts = () => {
  return (
    <>
        <section>
            <div className="flex m-4 gap-2">
                <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded h-300px ">
                    <div className="">
                        <p className="text-transparent bg-clip-text bg-gradient-to-t from-teal-1 to-green-400 py-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl inline-block">100,000 </p>
                        <p className="text-black font-bold">items recycled (all time)</p>
                        <p className="text-green-400">34.5% of all waste</p>
                    </div>
                </div>
                <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded max-h-300px">
                    <div className="">
                        <p className="text-transparent bg-clip-text bg-gradient-to-t from-teal-1 to-green-400 py-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl inline-block">30%</p>
                        <p className="text-black font-bold">better than human recycling rate</p>
                        <p className="text-green-400">+34.5%</p>
                    </div>
                </div>
                <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded max-h-300px">
                    <div className="">
                    <p className="text-transparent bg-clip-text bg-gradient-to-t from-teal-1 to-green-400 py-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl inline-block">234</p>
                    <p className="text-black font-bold">items recycled this week</p>
                    <p className="text-green-400"></p>
                    </div>
                </div>
                <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded h-300px">
                    <div className="">
                        <p className="text-transparent bg-clip-text bg-gradient-to-t from-teal-1 to-green-400 py-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl inline-block">1pm</p>
                        <p className="text-black font-bold">most active time of day</p>
                        <p className="text-green-400">-1hr</p>
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