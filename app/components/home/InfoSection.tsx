import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";
import cleanLogo from "../../images/LogoCleansea.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function () {
  return (
    <section className="max-w-4xl container mx-auto  bg-secondary text-textColor">
      <div className="py-8 px-6">
        <div>
          <h1 className="font-philosopher font-bold text-4xl pt-4  font-serif">
            Rohit Kumar Amdahl <span className="text-sm">✨</span>
          </h1>
          <p className="  py-2 text-lg font-semibold flex flex-wrap gap-4 ">
            Internship | Designer & Frontend developer at
            <span role="link" className="px-2 font-bold">
              <a
                className="underline text-link hover:text-green-500 transition duration-100"
                href="https://cleanseasolutions.no"
              >
                Clean Sea Solutions AS
              </a>
            </span>
            <Image
              className="max-w-[100px] w-full"
              src={cleanLogo}
              alt="company logo"
            ></Image>
          </p>
          <p className=" font-semibold text-lg">Oslo Norway</p>
          <div className=" max-w-sm mt-4 text-lg  bg-primary rounded-2xl">
            <p className=" px-4 text-lg py-2 capitalize flex  gap-2 items-center">
              {" "}
              <MdOutlineWorkOutline size={20} /> open to new opportunities /
              Work.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-[520px] w-full  py-6 ">
          <div>
            <Link
              href="https://www.linkedin.com/feed/"
              target="_blank"
              title="LinkedIn"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
            >
              <FaLinkedin size={22} /> Linkedin
            </Link>
          </div>
          <div>
            <Link
              href="mailto:rohit_dsigner@outlook.com"
              target="_blank"
              title="Email"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
            >
              <MdOutlineEmail />
              Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
