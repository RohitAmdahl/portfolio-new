import Image from "next/image";
import logo from "@/app/images/logo.png";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="bg-secondary  ">
      <div className="container max-w-5xl mx-auto">
        <nav className="w-full flex justify-between items-center p-4">
          <div>
            <Image
              className="max-w-[50px] w-full"
              src={logo}
              alt="logo"
            ></Image>
          </div>
          <div className="max-w-[150px] w-full">
            <Link
              href="https://discord.com/828741507258646636"
              target="_blank"
              title="Discord"
              className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-3 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black text-lg"
            >
              <MdOutlineFileDownload size={24} />
              CV
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
