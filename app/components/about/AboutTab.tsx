import Link from "next/link";

export default function () {
  return (
    <section className="bg-secondary text-textColor px-3 ">
      {" "}
      <div className="text md ">
        <div className=" p-4 ">
          <p className="text-lg py-2 pb-4">
            Welcome to my website! I'm a dedicated Frontend Developer based in
            Oslo, Norway, currently expanding my expertise in Java and delving
            into the world of object-oriented programming. <br /> In 2021, I
            began a two-year journey into Frontend Development at Noroff. I love
            coding and expressing that love through writing.I write about
            different topics, aiming to make them easy for everyone to
            understand. Sharing knowledge is important to me, and I enjoy
            learning from other programmers.
            <br /> I started by studying Accessory Design and later worked in
            architectural firms, drawing plans, and creating 3D animations.
          </p>

          <p>
            I gained various skills at Noroff school, including HTML, CSS,
            JavaScript, TypeScript, React.js, Tailwind CSS, Sass, Bootstrap, and
            Vite. I've also mastered using Netlify for deployment and learned
            about Git and GitHub for version control. Additionally, I've
            developed proficiency in creating websites without coding using
            WordPress. I have also gained good knowledge and have used Jest and
            Cypress for testing.
          </p>
          <div className="p-4">
            <Link
              className="hover:underline text-textColor hover:text-green-500 transition duration-100"
              href="https://www.linkedin.com/pulse/naming-things-hard-rohit-kumar-amdahl-wwlzf/"
            >
              - Naming Things Is Hard:- english version of this article
            </Link>
            <div>
              <Link
                className="hover:underline text-textColor hover:text-green-500 transition duration-100"
                href="https://www.kode24.no/artikkel/vanskelig-a-lage-gode-navn-synes-rohit-men-har-3-gode-tips/80865316"
              >
                - Naming Things Is Hard:- norwegian version of this article by
                Kode 24.
              </Link>
            </div>
          </div>
        </div>
        {/* <div>
        <JavaSection />
      </div> */}
        {/* <div>
          <Background />
        </div> */}
      </div>
    </section>
  );
}
