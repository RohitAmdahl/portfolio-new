import myPic from "@/app/images/profileImg.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function () {
  return (
    <section className="max-w-4xl container mx-auto text-textColor mt-16 ">
      <div className=" bg-banner bg-no-repeat bg-cover max-w[150px] w-full h-[250px] border-8 border-secondary rounded-lg">
        <div className="flex justify-between items-baseline gap-5 pt-16 px-4 mt-8">
          <div className="max-w-[150px] w-full">
            <Image
              className="max-w-[170px] w-full mx-auto border-8 border-emerald-600 shadow-2xl shadow-zinc-600 bg-backgroundColor rounded-full"
              src={myPic}
              alt="logo"
            ></Image>
          </div>
          <div>
            <div className="gap-5 ">
              <Link
                href="https://discord.com/828741507258646636"
                target="_blank"
                title="Discord"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
              >
                <FaGithub size={20} />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
