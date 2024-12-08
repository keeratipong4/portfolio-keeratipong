import Image from "next/image";
import Link from "next/link";

export default function EducationItem({
  institution,
  logo,
  title,
  year,
  credential,
}) {
  return (
    <div className="grid-row-1 grid w-full grid-cols-[80px_1fr] gap-4">
      <div className="w-auto">
        <Image src={logo} width={700} height={700} className="" />
      </div>
      <div>
        <h1>{institution}</h1>
        <h2>{title}</h2>
        <p>Graduated: {year}</p>
        {credential && (
          <Link
            href={credential}
            className="flex w-fit items-center gap-1 text-nowrap rounded-full border border-gray-300 bg-gray-100 px-2 py-2 text-sm outline-none transition hover:scale-110 hover:bg-gray-800 hover:text-white focus:scale-110 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-800 sm:px-3"
          >
            Show credential
          </Link>
        )}
      </div>
    </div>
  );
}
