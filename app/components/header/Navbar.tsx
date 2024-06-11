import Image from "next/image";
import logo from "../../images/logo.png";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Navbar() {
  return (
    <header className=" w-full mx-auto bg-secondary fixed p-4 top-0 ">
      <div className=" max-w-5xl container mx-auto backdrop-blur-sm bg-secondary/30 ">
        <div className="  ">
          <nav className="w-full flex justify-between items-center px-4 ">
            <div>
              <Image
                className="max-w-[35px] w-full"
                src={logo}
                alt=" rohit kumar amdahl logo"
              ></Image>
            </div>
            <div className="max-w-[100px] w-full">
              <Link
                href="https://discord.com/828741507258646636"
                target="_blank"
                title="Discord"
                className="bg-blue-500 ring-4 ring-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black text-md "
              >
                <MdOutlineFileDownload size={20} />
                CV
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
