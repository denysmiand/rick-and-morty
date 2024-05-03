import { links } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  name: string;
  link: string;
  pathName: string | null;
};

const generateNavStyles = (path: string | null, link: string) => {
  return `${
    path && path.includes(link)
      ? "text-blue-600 border-b-2 border-blue-600"
      : ""
  } px-5 py-3 mob:px-3 mob:py-1 `;
};

export const Header = () => {
  const pathName = usePathname();

  return (
    <div className="bg-gray-50 shadow-around z-20 flex flex-row justify-center gap-5 ">
      {links.map((link) => (
        <NavLink name={link.name} link={link.link} pathName={pathName} />
      ))}
    </div>
  );
};

const NavLink = ({ name, link, pathName }: NavLinkProps) => {
  return (
    <Link href={link} className={generateNavStyles(pathName, link)}>
      {name}
    </Link>
  );
};
