import Image from "next/image";
import TopSection from "./components/home/TopSection";
import InfoSection from "./components/home/InfoSection";

export default function Home() {
  return (
    <div>
      <TopSection />
      <InfoSection />
    </div>
  );
}
