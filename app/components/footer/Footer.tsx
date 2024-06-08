import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-textColor mt-8">
      <div className=" container mx-auto text-center max-w-4xl py-8   ">
        <Link
          href="https://www.linkedin.com/feed/"
          className="hover:underline m-8"
        >
          Designed By
          <span className="font-bold  text-textColor">
            &copy; Rohit kumar Amdahl,
          </span>
        </Link>

        <span>{new Date().getFullYear()} </span>
      </div>
    </footer>
  );
}
