import Image from "next/image";
import TopSection from "./components/home/TopSection";
import InfoSection from "./components/home/InfoSection";
import TabButtons from "./components/tab/TabButtons";

export default function Home() {
  return (
    <div>
      <TopSection />
      <InfoSection />
      <TabButtons />
    </div>
  );
}
