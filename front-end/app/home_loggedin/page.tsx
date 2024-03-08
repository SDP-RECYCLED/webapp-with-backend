import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Bin from "@/components/Bin";
import Guide from "@/components/Guide";
import CustomLayout from "./customLayout";

export default function Home() {
  return (
    <CustomLayout>
      <Hero />
      {/* <Bin />
      <Guide /> */}
      <Features />
      {/* <GetApp /> */}
    </CustomLayout>
  )
}
